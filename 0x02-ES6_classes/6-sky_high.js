import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') this._floors = floors;
    else throw new TypeError('Floors must be a number');
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    
  }
}
