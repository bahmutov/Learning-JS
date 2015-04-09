//load library module

var test = require('unit.js');

var library = require('../library_fnc');

describe('mocha+assert type checking', function() {

var library = function(testype, testval) {
  console.log(typeof testval);
  return typeof testval === testype.toLowerCase();
}
 
  it('numbers', function() {
    var a = 1;
    var b = [1,2,3];
    var c = null;
    test.assert.equal(library('NUMBER', a), true);
    test.assert.equal(library('number', b), false);
    test.assert.equal(library('number', c), false);
  });
  it('strings equal?', function() {
    var a = 'stri';
    var b = true;
    var c = null;
    test.assert.equal(library('string', a), true);
    test.assert.equal(library('string', b), false);
    test.assert.equal(library('string', c), false);
  });
  
  it('boolean', function() {
    var a = true;
    var b = 'not boolean';
    var c = null;
    test.assert.equal(library('boolean', a), true);
    test.assert.equal(library('boolean', c), false);
  });
  
  it('array', function() {
    var o = [1,2,3,4];
    var r = /ab+c/;
    var c = null;
    test.assert.equal(library('array', o), true);
    test.assert.equal(library('array', r), false);
    test.assert.equal(library('array', c), false);
  });
  it('regexp', function() {
    var r = /ab+c/;
    var o = [1,2,3,4]
    test.assert.equal(library('array', o), true);
    test.assert.equal(library('array', r), false);
  });
  });