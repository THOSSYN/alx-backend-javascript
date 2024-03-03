// import calculateNumber from './2-calcul_chai.js';
// import { expect } from 'chai';
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');


describe('calculateNumber', function () {
  describe('SUM', function () {
    it('Returns the sum of two numbers if type is SUM', function () {
      const sum = calculateNumber(1.4, 4.5);
      expect(sum).to.equal(6);
    });

    it('Returns the sum of two numbers if type is SUM', function () {
      const sum = calculateNumber(0, 0);
      expect(sum).to.equal(0);
    });

    it('Returns the sum of two numbers if type is SUM', function () {
      const sum = calculateNumber(-1, 4);
      expect(sum).to.equal(3);
    });
  });

  describe('SUBTRACT', function () {
    it('Difference of two numbers if type is SUBTRACT', function () {
      const difference = calculateNumber(1.4, 4.5, 'SUBTRACT');
      expect(difference).to.equal(-4);
    });

    it('Difference of two numbers if type is SUBTRACT', function () {
      const difference = calculateNumber(0, 0, 'SUBTRACT');
      expect(difference).to.equal(0);
    });

    it('Difference of two numbers if type is SUBTRACT', function () {
      const difference = calculateNumber(-1, 4, 'SUBTRACT');
      expect(difference).to.equal(-5);
    });
  });

  describe('DIVIDE', function () {
    it('DIVIDE a number by another if type is DIVIDE', function () {
      const div = calculateNumber(1.4, 4.5, 'DIVIDE');
      expect(div).to.equal(0.2);
    });

    it('DIVIDE a number by another if type is DIVIDE', function () {
      const div = calculateNumber(1.4, 0, 'DIVIDE');
      expect(div).to.equal('Error');
    });

    it('DIVIDE a number by another if type is DIVIDE', function () {
      const div = calculateNumber(-1, 4, 'DIVIDE');
      expect(div).to.equal(-0.25);
    });
  });
});
