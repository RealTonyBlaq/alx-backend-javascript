function calculateNumber(type, a, b) {
  b = Math.round(b);
  a = Math.round(a);
  if (type === 'SUM') return (a + b);
  if (type === 'SUBTRACT') return (Math.round(b) - Math.round(a))
}

module.exports = calculateNumber;
