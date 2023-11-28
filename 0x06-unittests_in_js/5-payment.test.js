const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');

describe('calculateNumber(type, a, b)', function () {
  it('SUM the 2 rounded numbers', function () {
    expect(Utils.calculateNumber('SUM', 1.4, 4.5), 6);
    expect(Utils.calculateNumber('SUM', 1.4, 4.5555), 6);
    expect(Utils.calculateNumber('SUM', 1.04, 10.2), 11);
  });
  it('SUBTRACT the 2 rounded numbers', function () {
    expect(Utils.calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    expect(Utils.calculateNumber('SUBTRACT', 1.4, 4.5555), -4);
    expect(Utils.calculateNumber('SUBTRACT', -1.04, 10.2), -11);
  });
  it('DIVIDE the 2 rounded numbers', function () {
    expect(Utils.calculateNumber('DIVIDE', 10.324, 2.09), 5);
    expect(Utils.calculateNumber('DIVIDE', 9.524, 2.41), 5);
    expect(Utils.calculateNumber('DIVIDE', 120.19845, 59.565), 2);
    expect(Utils.calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    expect(Utils.calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    expect(Utils.calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    expect(Utils.calculateNumber('DIVIDE', -2.0, -2.0), 1);
  });
  it('it should return Error if b is equal to 0', () => {
    expect(Utils.calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
    expect(Utils.calculateNumber('DIVIDE', 0, 0).toLowerCase(), 'error');
    expect(Utils.calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
    expect(Utils.calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
  });
});

describe('sendPaymentRequestToApi', function () {
  let spiedConsole;

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

  it('logs to the console the right message', () => {
    sendPaymentRequestToApi(100, 131)
    sendPaymentRequestToApi(100.3, 131.3)
    sendPaymentRequestToApi(100.6, 131.3)
    sendPaymentRequestToApi(100.3, 131.6)
    sendPaymentRequestToApi(100.6, 131.6)
    expect(spiedConsole.log.calledWith('The total is: 231')).to.be.true;
    expect(spiedConsole.log.calledWith('The total is: 231')).to.be.true;
    expect(spiedConsole.log.calledWith('The total is: 232')).to.be.true;
    expect(spiedConsole.log.calledWith('The total is: 232')).to.be.true;
    expect(spiedConsole.log.calledWith('The total is: 233')).to.be.true;
  });
})
