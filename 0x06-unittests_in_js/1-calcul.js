function calculateNumber(type, a, b) {
  const d = Math.round(b);
  const c = Math.round(a);
  if (type === 'SUM') return (c + d);
  if (type === 'SUBTRACT') return (d - c);
  if (type === 'DIVIDE' && b !== 0) return (c / d);
  return 'Error';
}

module.exports = calculateNumber;
