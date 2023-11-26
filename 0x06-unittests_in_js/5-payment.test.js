const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('sendPaymentRequestToApi', function () {
  let spiedConsole = null;

  beforeEach('A setup function before each test. Create spy console before each test', function () {
    if (!spiedConsole) {
      spiedConsole = sinon.spy(console);
    };
  });

  afterEach('A clean up function after each test. Reset spy console after each test', function () {
    if (spiedConsole) {
      spiedConsole.log.resetHistory();
    };
  });

  it('Test the sendPaymentRequestToApi(100, 20) endpoint', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spiedConsole.log.calledWithExactly('The total is: 120'));
    expect(spiedConsole.log.calledOnce).to.be.true;
  });

  it('Test the sendPaymentRequestToApi(10, 10) endpoint', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spiedConsole.log.calledWithExactly('The total is: 20'));
    expect(spiedConsole.log.calledOnce).to.be.true;
  });
})
