const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    calculateNumberSpy.restore();
  });
});
