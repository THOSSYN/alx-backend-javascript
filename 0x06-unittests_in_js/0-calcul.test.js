const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('returns the sum of two numbers', function() {
    const intIntResult = calculateNumber(1, 3);
    assert.strictEqual(intIntResult, 4);
  });

  it('returns the sum of two numbers', function() {
    const intFloatResult = calculateNumber(1, 3.7);
    assert.strictEqual(intFloatResult, 5);
  });

  it('returns the sum of two numbers', function() {
    const floatFloatResult = calculateNumber(1.2, 3.7);
    assert.strictEqual(floatFloatResult, 5);
  });

  it('returns the sum of two numbers', function() {
    const FloatFloatResult = calculateNumber(1.5, 3.7);
    assert.strictEqual(FloatFloatResult, 6);
  });

  it('returns the sum of two numbers', function() {
    const zeroResult = calculateNumber(0, 0);
    assert.strictEqual(zeroResult, 0);
  });

  it('returns the sum of two numbers', function() {
    const negPosResult = calculateNumber(-1, 3);
    assert.strictEqual(negPosResult, 2);
  });

  it('returns the sum of two numbers', function() {
    const negativeResult = calculateNumber(-1, -3);
    assert.strictEqual(negativeResult, -4);
  });

  it('returns the sum of two numbers', function() {
    const intStringResult = calculateNumber(1, 'Hello');
    assert.strictEqual(intStringResult, NaN);
  });

  it('returns the sum of two numbers', function() {
    const strStringResult = calculateNumber('Hello', 'World!');
    assert.strictEqual(strStringResult, NaN);
  });

  it('returns the sum of two numbers', function() {
    const nonNumResult = calculateNumber(1, {'a': 2});
    assert.strictEqual(nonNumResult, NaN);
  });
  
  describe('calculateNumber', function() {
    it('returns Infinity when one of the arg is Inf', function() {
      const result = calculateNumber(5, Infinity);
      assert.equal(result, Infinity);
    });

    it('returns -Infinity when one of the arg is -Inf', function() {
      const result = calculateNumber(5, -Infinity);
      assert.equal(result, -Infinity);
    });
  });
  
  describe('calculateNumber', function() {
    it('handles large numbers correctly', function() {
      const result = calculateNumber(1e20, 1e20);
      assert.equal(result, 2e20);
    });
  });
});
