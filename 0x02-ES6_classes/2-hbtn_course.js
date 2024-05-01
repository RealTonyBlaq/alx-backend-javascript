export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === String) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === Number) this._length = length;
    else throw new TypeError('')
  }
}
