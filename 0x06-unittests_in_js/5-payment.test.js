const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', function() {
  let consoleLogSpy;

  beforeEach(function() {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleLogSpy.restore();
  });

  it('should log correct total for 100 and 20', function() {
    sendPaymentRequestToAPI(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log correct total for 10 and 10', function() {
    sendPaymentRequestToAPI(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
