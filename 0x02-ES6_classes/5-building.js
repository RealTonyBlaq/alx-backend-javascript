export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') this._sqft = sqft;
    else throw new TypeError('Sqft must be a number');

    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value === 'number') this._sqft = value;
    else throw new TypeError('Sqft must be a number');
  }
}
