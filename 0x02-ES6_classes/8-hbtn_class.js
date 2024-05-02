export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') this._size = size;
    else throw new TypeError('Size must be a number');

    if (typeof location === 'string') this._location = location;
    else throw new TypeError('Location must be a string');
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value === 'number') this._size = value;
    else throw new TypeError('Size must be a number');
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value === 'string') this._location = value;
    else throw new TypeError('Location must be a string');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return String(this._location);
  }
}
