export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === String) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
    if (typeof length === Number) this._length = length;
    else throw new TypeError('Length must be a number');

    if (typeof students === Array) this._students = students;
    else throw new TypeError('Students must be an array');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value typeof)
  }
}
