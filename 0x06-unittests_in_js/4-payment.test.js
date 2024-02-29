const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with the correct arguments', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
