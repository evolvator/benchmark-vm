var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var async = require('async');

var vm = require('vm');

var VM = require('vm2').VM;
var NodeVM = require('vm2').NodeVM;
var VMScript = require('vm2').VMScript;

var code = 'var a = 123;';
var thisContext = vm.createContext(this);
var emptyContext = vm.createContext({});

var suite = new Benchmark.Suite(`vm`);

suite.add('eval', function() { eval(code); });
suite.add('vm.runInContext context=this', function() { vm.runInContext(code, thisContext); });
suite.add('vm.runInContext context=empty', function() { vm.runInContext(code, emptyContext); });
suite.add('vm.runInNewContext', function() { vm.runInNewContext(code); });
suite.add('vm.runInNewContext sandbox=this', function() { vm.runInNewContext(code, this); });
suite.add('vm.runInNewContext sandbox=empty', function() { vm.runInNewContext(code, {}); });
suite.add('vm.runInThisContext', function() { vm.runInThisContext(code); });

var script = new vm.Script(code);
suite.add('vm script.runInContext context=this', function() { script.runInContext(thisContext); });
suite.add('vm script.runInContext context=empty', function() { script.runInContext(emptyContext); });
suite.add('vm script.runInNewContext', function() { script.runInNewContext(); });
suite.add('vm script.runInNewContext sandbox=this', function() { script.runInNewContext(this); });
suite.add('vm script.runInNewContext sandbox=empty', function() { script.runInNewContext({}); });
suite.add('vm script.runInThisContext', function() { script.runInThisContext(); });

var _vm1 = new VM();
suite.add('vm2@3.6.2 VM run', function() { _vm1.run(code); });
var _vm2 = new NodeVM();
suite.add('vm2@3.6.2 NodeVM run', function() { _vm2.run(code); });
var _vm3 = new VMScript(code);
suite.add('vm2@3.6.2 VM+VMScript run', function() { _vm1.run(_vm3); });
suite.add('vm2@3.6.2 NodeVM+VMScript run', function() { _vm2.run(_vm3); });

tb.wrapSuite(suite);
suite.run({ async: true });