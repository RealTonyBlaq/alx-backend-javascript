const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and two numbers', () => {
    // creating a stub on the function
    const fnStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Expect the spy to have been called with the correct arguments
    expect(fnStub.calledOnce).to.be.true;
    expect(fnStub.calledWith('SUM', 100, 20)).to.be.true;

    // restore the original function after testing
    fnStub.restore();
  });

  it('should log the correct sum to the console', () => {
    // Stub console.log to check its output
    const consoleSpy = sinon.spy(console, 'log');
    const fnStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Expect console.log to be called with the correct message
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.firstCall.args[0]).to.equal('The total is: 10');

    // Restore the original function after testing
    consoleSpy.restore();
  });
});
