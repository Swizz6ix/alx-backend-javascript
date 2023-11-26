const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber(type, a, b)', function () {
  it('SUM the 2 rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5555), 6);
    assert.strictEqual(calculateNumber('SUM', 1.04, 10.2), 11);
  });
  it('SUBTRACT the 2 rounded numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5555), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.04, 10.2), -11);
  });
  it('DIVIDE the 2 rounded numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 10.324, 2.09), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 9.524, 2.41), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 120.19845, 59.565), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
  });
  it('DIVISION of 0 and 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), NaN);
  });
})