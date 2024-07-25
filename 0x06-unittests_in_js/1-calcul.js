function calculateNumber(type, a, b) {
  b = Math.round(b);
  a = Math.round(a);
  if (type === 'SUM') return (a + b);
  if (type === 'SUBTRACT') return (b - a);
  if (type === 'DIVIDE')
}

module.exports = calculateNumber;
