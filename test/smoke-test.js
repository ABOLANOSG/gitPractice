"use strict";
// require assert
var assert = require('assert');
const practiceFunctions = require('../src/index.js');

describe('practice funcions', () => {
  context('arrays with strings', () => {
    [
      { input: ["apple", "banana", "strawberry", "kiwi"], expected: "strawberry"},
      { input: ["apple", "banana", "cherry"], expected: "banana" },
      { input: ["dog", "elephant", "cat"], expected: "elephant" },
      { input: ["red", "blue", "green"], expected: "green" },
      { input: ["short", "longer", "longest"], expected: "longest" },
      { input: ["a", "ab", "abc"], expected: "abc" }
    ].forEach(function(obj) {
      it(`shold return "${obj.expected}" for input "[${obj.input}]"`, function() {
        const result = practiceFunctions.longestString(obj.input);
        assert.strictEqual(result, obj.expected);
      })
    })
  }),

  context('arrays with people', () => {
    [
      {
          input: [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }, { name: 'Tom', age: 20 }],
          expected: [{ name: 'Tom', age: 20 }, { name: 'John', age: 25 }, { name: 'Jane', age: 30 }]
      },
      {
          input: [{ name: 'Alice', age: 40 }, { name: 'Bob', age: 35 }, { name: 'Charlie', age: 45 }],
          expected: [{ name: 'Bob', age: 35 }, { name: 'Alice', age: 40 }, { name: 'Charlie', age: 45 }]
      }
  ].forEach(function(obj) {
    it('should return people in order by age', function() {
      const resultByAge = practiceFunctions.orderByAge(obj.input);
      assert.deepStrictEqual(resultByAge, obj.expected);
    })

  })
  }),

  context('lowerCase strings', () => {
    [
      { input: ["apple", "banana", "strawberry", "kiwi"], expected: ["APPLE", "BANANA", "STRAWBERRY", "KIWI"] },
      { input: ["hello", "world"], expected: ["HELLO", "WORLD"] },
      { input: ["JavaScript", "Mocha"], expected: ["JAVASCRIPT", "MOCHA"] },
      { input: ["test", "case"], expected: ["TEST", "CASE"] }
  ].forEach(function(obj) {
    it(`should transform "${obj.input}" to "${obj.expected}"`, function() {
      const upperCaseWords = practiceFunctions.toUpperCase(obj.input);
      assert.deepStrictEqual(upperCaseWords, obj.expected);
    })
  })
  }),

  context('list of students', () => {
    [
      {
          input:     [
            { name: "Alice", grades: [85, 90, 78], passed: true },
            { name: "Bob", grades: [60, 70, 65], passed: false },
            { name: "Charlie", grades: [95, 100, 92], passed: true },
            { name: "Dave", grades: [72, 75, 70], passed: true },
          ],
          expected:     [
            { name: "Alice", averageGrade: 84.33333333333333 },
            { name: "Charlie", averageGrade: 95.66666666666667 },
            { name: "Dave", averageGrade: 72.33333333333333 },
          ]
      }
    ].forEach(function(obj) {
      it('should return a list with the approved ones', function() {
        const listOfApproved = practiceFunctions.returnApproved(obj.input);
        assert.deepStrictEqual(listOfApproved, obj.expected);
      })
    })

  })

});

/*const sum = require('../src');

describe('smoke test', () => {
  context('sum function', () => {
    [
      { values: [], expected: 0 },
      { values: [20,15], expected: 35 },
      { values: [-2], expected: -2 },
      { values: [20,35,40], expected: 95 },
    ].forEach( function( el ) {
      it(`should sum ${(el.values.length > 0 ? el.values : 'an empty array' )} and return ${el.expected}`, done => {
        const total = sum(el.values)
        assert.equal(total, el.expected,
          'not the expected return value');
        done();
      });
    });
  });
});*/