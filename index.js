var Benchmark = require('benchmark');
var tb = require('travis-benchmark');

var async = require('async');

var is = require('is');
var lodash = require('lodash');
var underscore = require('underscore');
var isString = require('is-string');
var isNumber = require('is-number');
var isArray = require('is-array');
var isObject = require('is-object');
var isFunction = require('is-function');
var isUndefined = require('is-undefined');
var isNull = require('is-null');
var isBoolean = require('is-boolean');

var demoString = 'abc';
var demoNumber = 123;
var demoObject = {};
var demoArray = [];
var demoFunction = function() {};
var demoUndefined = undefined;
var demoNull = null;
var demoBoolean = false;

async.series([
  function(next) {
    var suite = new Benchmark.Suite(`string`);
    
    suite.add('typeof [string]', function() { typeof demoString === 'string'; });
    suite.add('is@3.2.1 string', function() { is.string(demoString); });
    suite.add('lodash@4.17.10 isString', function() { lodash.isString(demoString); });
    suite.add('underscore@1.9.1 isString', function() { underscore.isString(demoString); });
    suite.add('isString@1.0.4', function() { isString(demoString); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`number`);
    
    suite.add('typeof [number]', function() { typeof demoNumber === 'number'; });
    suite.add('is@3.2.1 number', function() { is.number(demoNumber); });
    suite.add('lodash@4.17.10 isNumber', function() { lodash.isNumber(demoNumber); });
    suite.add('underscore@1.9.1 isNumber', function() { underscore.isNumber(demoNumber); });
    suite.add('isNumber@6.0.0', function() { isNumber(demoNumber); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`array`);
    
    suite.add('Array.isArray', function() { Array.isArray(demoArray); });
    suite.add('[object Array]', function() { Object.prototype.toString.call(demoArray) === '[object Array]' });
    suite.add('is@3.2.1 array', function() { is.array(demoArray); });
    suite.add('lodash@4.17.10 isArray', function() { lodash.isArray(demoArray); });
    suite.add('underscore@1.9.1 isArray', function() { underscore.isArray(demoArray); });
    suite.add('isArray@1.0.1', function() { isArray(demoArray); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`object`);
    
    suite.add('typeof [object]', function() { typeof demoObject === 'object'; });
    suite.add('is@3.2.1 object', function() { is.object(demoObject); });
    suite.add('lodash@4.17.10 isObject', function() { lodash.isObject(demoObject); });
    suite.add('underscore@1.9.1 isObject', function() { underscore.isObject(demoObject); });
    suite.add('isObject@1.0.1', function() { isObject(demoObject); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`function`);
    
    suite.add('typeof [function]', function() { typeof demoFunction === 'function'; });
    suite.add('is@3.2.1 function', function() { is.function(demoFunction); });
    suite.add('lodash@4.17.10 isFunction', function() { lodash.isFunction(demoFunction); });
    suite.add('underscore@1.9.1 isFunction', function() { underscore.isFunction(demoFunction); });
    suite.add('isFunction@1.0.1', function() { isFunction(demoFunction); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`undefined`);
    
    suite.add('typeof [undefined]', function() { typeof demoUndefined === 'undefined'; });
    suite.add('is@3.2.1 undefined', function() { is.undefined(demoUndefined); });
    suite.add('lodash@4.17.10 isUndefined', function() { lodash.isUndefined(demoUndefined); });
    suite.add('underscore@1.9.1 isUndefined', function() { underscore.isUndefined(demoUndefined); });
    suite.add('isUndefined@1.0.9', function() { isUndefined(demoUndefined); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`null`);
    
    suite.add('typeof [null]', function() { typeof demoNull === 'null'; });
    suite.add('is@3.2.1 null', function() { is.null(demoNull); });
    suite.add('lodash@4.17.10 isNull', function() { lodash.isNull(demoNull); });
    suite.add('underscore@1.9.1 isNull', function() { underscore.isNull(demoNull); });
    suite.add('isNull', function() { isNull(demoNull); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
  function(next) {
    var suite = new Benchmark.Suite(`boolean`);
    
    suite.add('typeof [boolean]', function() { typeof demoBoolean === 'boolean'; });
    suite.add('is@3.2.1 boolean', function() { is.boolean(demoBoolean); });
    suite.add('lodash@4.17.10 isBoolean', function() { lodash.isBoolean(demoBoolean); });
    suite.add('underscore@1.9.1 isBoolean', function() { underscore.isBoolean(demoBoolean); });
    suite.add('isBoolean', function() { isBoolean(demoBoolean); });
    
    tb.wrapSuite(suite, function() { next(); });
    suite.run({ async: true });
  },
]);
