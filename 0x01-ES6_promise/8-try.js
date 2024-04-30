export default function divideFunction(numerator, denominator) {
  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    throw new Error('Not a number');
  }

  if (denominator !== 0) return (numerator / denominator);
  throw new Error('cannot divide by 0');
}
