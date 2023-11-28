const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect

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
  let spyConsole;
  beforeEach(() => {
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(() => {
    spyConsole.restore();
  });

  it('logs to the console the right message', () => {
    sendPaymentRequestToApi(100, 131)
    sendPaymentRequestToApi(100.3, 131.3)
    sendPaymentRequestToApi(100.6, 131.3)
    sendPaymentRequestToApi(100.3, 131.6)
    sendPaymentRequestToApi(100.6, 131.6)
    expect(spyConsole.calledWith('The total is: 231')).to.be.true;
    expect(spyConsole.calledWith('The total is: 231')).to.be.true;
    expect(spyConsole.calledWith('The total is: 232')).to.be.true;
    expect(spyConsole.calledWith('The total is: 232')).to.be.true;
    expect(spyConsole.calledWith('The total is: 233')).to.be.true;
  });

  it('Test the sendPaymentRequestToApi endpoint', function () {
    const utilSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20)
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore()
  });
});
