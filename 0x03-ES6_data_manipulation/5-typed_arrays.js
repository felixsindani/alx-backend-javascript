/**
 * returns a new ArrayBuffer with an Int8 value at a specific position.
 * @param {Number} length - length of buffer
 * @param {Number} position - position
 * @param {Number} value - value to store in the position
 * @returns {DataView} - new ArrayBuffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const res = new DataView(new ArrayBuffer(length), 0, length);
  res.setInt8(position, value);
  return res;
}
