const { expect } = require('chai');
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let moduleSpy = sinon.spy(Utils, 'calculateNumber');
  let consoleSpy = sinon.stub(console)
});
