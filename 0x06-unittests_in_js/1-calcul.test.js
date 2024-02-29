const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('Returns the sum of two numbers if type is SUM', function() {
      const sum = calculateNumber('SUM', 1.4, 4.5);
      assert.strictEqual(sum, 6);
    });

    it('Returns the sum of two numbers if type is SUM', function() {
      const sum = calculateNumber('SUM', 0, 0);
      assert.strictEqual(sum, 0);
    });

    it('Returns the sum of two numbers if type is SUM', function() {
      const sum = calculateNumber('SUM', -1, 4);
      assert.strictEqual(sum, 3);
    });
  });

  describe('SUBTRACT', function() {
    it('Difference of two numbers if type is SUBTRACT', function() {
      const difference = calculateNumber('SUBTRACT', 1.4, 4.5);
      assert.strictEqual(difference, -4);
    });

    it('Difference of two numbers if type is SUM', function() {
      const difference = calculateNumber('SUBTRACT', 0, 0);
      assert.strictEqual(difference, 0);
    });

    it('Difference of two numbers if type is SUBTRACT', function() {
      const difference = calculateNumber('SUBTRACT', -1, 4);
      assert.strictEqual(difference, -5);
    });
  });
  describe('DIVIDE', function() {
    it('DIVIDE a number by another if type is DIVIDE', function() {
      const div = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(div, 0.2);
    });

    it('DIVIDE a number by another if type is DIVIDE', function() {
      const div = calculateNumber('DIVIDE', 1.4, 0);
      console.log(div);
      assert.strictEqual(div, 'Error');
    });

    it('DIVIDE a number by another if type is DIVIDE', function() {
      const div = calculateNumber('DIVIDE', -1, 4);
      assert.strictEqual(div, -0.25);
    });
  });
});
