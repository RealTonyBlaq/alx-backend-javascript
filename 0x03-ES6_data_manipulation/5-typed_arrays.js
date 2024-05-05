export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');

  const arr = new DataView(new ArrayBuffer(length));
  arr.setInt8(position, value);

  return arr;
}
