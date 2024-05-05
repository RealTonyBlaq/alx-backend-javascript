export default function createInt8TypedArray(length, position, value) {
  if (length < 0) throw new Error('Length cannot be negative');

  const arr = new ArrayBuffer(length);
  const IntArr = new Int8Array(arr);

  try {
    IntArr[position] = value;
  } catch (error) {
    throw new Error('Position outside range');
  }

  return IntArr;
}
