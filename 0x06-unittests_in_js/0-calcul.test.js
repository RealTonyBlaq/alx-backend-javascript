const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber', () => {
  it('should return 1 with inputs 0.5 and 0.2', () => {
    assert.equal(calculateNumber(0.5, 0.2), 1);
  });

  it('should return 2 with inputs 0.5 and 0.7', () => {
    assert.equal(calculateNumber(0.5, 0.7), 2);
  });

  it('should return 0 with inputs 0.4 and 0.3', () => {
    assert.equal(calculateNumber(0.4, 0.3), 0);
  });

  it('should return 3 with inputs 1.2 and 1.7', () => {
    assert.equal(calculateNumber(1.2, 1.7), 3);
  });

  it('should return -3 with inputs -7.5 and 4.3', () => {
    assert.equal(calculateNumber(-7.5, 4.3), -3);
  });

  it('should return -5 with inputs -2 and -2.6', () => {
    assert.equal(calculateNumber(-2, -2.6), -5);
  });
});
