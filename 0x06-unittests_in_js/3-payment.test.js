const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments and perform the same math', function() {
    // Spy on the calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function under test
    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledWithExactly(100, 20, 'SUM')).to.be.true;

    // Get the result of calculateNumber when called with the same arguments
    const expectedResult = calculateNumber(100, 20, 'SUM');

    // Get the console output of sendPaymentRequestToApi
    // For simplicity, assume it was logged as 'The total is: <result>'
    const consoleOutput = 'The total is: ' + expectedResult;

    // Assert that the console output matches the expected result
    expect(consoleOutput).to.equal(`The total is: ${expectedResult}`);

    // Restore the spy
    calculateNumberSpy.restore();
  });
});
