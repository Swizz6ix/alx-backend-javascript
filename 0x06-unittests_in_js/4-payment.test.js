const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect

describe('Use a fix return value with stub to test sendPaymentRequestToApi', function () {
  it('Test the sendPaymentRequestToApi endpoint', function () {
    const spiedConsole = sinon.spy(console);
    const stubFnx = sinon.stub(Utils, 'calculateNumber');
    stubFnx.returns(10);
    sendPaymentRequestToApi(100, 20)
    expect(stubFnx.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubFnx((100, 20))).to.be.equal(10);
    expect(spiedConsole.log.calledWith('The total is: 10')).to.be.false;
    stubFnx.restore();
    spiedConsole.log.restore();
  });
})
