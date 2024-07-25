const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber', () => {
  it('should return 1 with inputs 0.5 and 0.2', () => {
    assert.equal(calculateNumber(0.5, 0.2), 1);
  });

  it('should return 2 with inputs 0.5 and 0.7', () => {});
});
