const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });

    it('should return 1 with inputs 0.5 and 0.2', () => {
      assert.equal(calculateNumber('SUM', 0.5, 0.2), 1);
    });

    it('should return 2 with inputs 0.5 and 0.7', () => {
      assert.equal(calculateNumber('SUM', 0.5, 0.7), 2);
    });

    it('should return 0 with inputs 0.4 and 0.3', () => {
      assert.equal(calculateNumber('SUM', 0.4, 0.3), 0);
    });

    it('should return 3 with inputs 1.2 and 1.7', () => {
      assert.equal(calculateNumber('SUM', 1.2, 1.7), 3);
    });

    it('should return -3 with inputs -7.5 and 4.3', () => {
      assert.equal(calculateNumber('SUM', -7.5, 4.3), -3);
    });

    it('should return -5 with inputs -2 and -2.6', () => {
      assert.equal(calculateNumber('SUM', -2, -2.6), -5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when inputs are 1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 1.4), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return 1 when inputs are 1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1.4), 1);
    });

    it('should return Error when inputs are 2.3 and 0.4', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0.4), 'Error');
    });
  });
});
