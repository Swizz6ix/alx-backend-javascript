const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect

describe('sendPaymentRequestToApi', function () {
  it('Test the sendPaymentRequestToApi endpoint', function () {
    const utilSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20)
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore()
  });
})
