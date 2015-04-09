//load library module

var test = require('unit.js');

var library = require('library_fnc');


describe('mocha+assert API description', function() {

var library = function(testype, testval) {
  console.log(typeof testval);
  return typeof testval === testype.toLowerCase();
}
 
  it('numbers', function() {
    var a = 1;
    var b = [1,2,3];
    var c = null;
    assert.equal(library('NUMBER', a), true);
    assert.equal(library('number', b), false);
    assert.equal(library('number', c), false);
  });
  it('strings equal?', function() {
    var a = 'stri';
    var b = true;
    var c = null;
    assert.equal(library('string', a), true);
    assert.equal(library('string', b), false);
    assert.equal(library('string', c), false);
  });
  
  it('boolean', function() {
    var a = true;
    var b = 'not boolean';
    var c = null;
    assert.equal(library('boolean', a), true);
    assert.equal(library('boolean', c), false);
  });
  
  it('array', function() {
    var o = [1,2,3,4];
    var r = /ab+c/;
    var c = null;
    assert.equal(library('array', o), true);
    assert.equal(library('array', r), false);
    assert.equal(library('array', c), false);
  });
  it('regexp', function() {
    var r = /ab+c/;
    var o = [1,2,3,4]
    assert.equal(library('array', o), true);
    assert.equal(library('array', r), false);
  });
  });