function calculateNumber(type, a, b) {
  b = M
  if (type === 'SUM') return (Math.round(a) + Math.round(b));
  if (type === 'SUBTRACT') return (Math.round(b) - Math.round(a))
}

module.exports = calculateNumber;
