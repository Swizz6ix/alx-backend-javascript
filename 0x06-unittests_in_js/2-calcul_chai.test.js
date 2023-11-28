const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber(type, a, b)', function () {
  it('SUM the 2 rounded numbers', function () {
    expect(calculateNumber('SUM', 1.4, 4.5), 6);
    expect(calculateNumber('SUM', 1.4, 4.5555), 6);
    expect(calculateNumber('SUM', 1.04, 10.2), 11);
  });
  it('SUBTRACT the 2 rounded numbers', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5555), -4);
    expect(calculateNumber('SUBTRACT', -1.04, 10.2), -11);
  });
  it('DIVIDE the 2 rounded numbers', function () {
    expect(calculateNumber('DIVIDE', 10.324, 2.09), 5);
    expect(calculateNumber('DIVIDE', 9.524, 2.41), 5);
    expect(calculateNumber('DIVIDE', 120.19845, 59.565), 2);
    expect(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    expect(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    expect(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    expect(calculateNumber('DIVIDE', -2.0, -2.0), 1);
  });
  it('it should return Error if b is equal to 0', () => {
    expect(calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
    expect(calculateNumber('DIVIDE', 0, 0).toLowerCase(), 'error');
    expect(calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
    expect(calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
  });
});
