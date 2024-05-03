export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* creates and returns a new instance of a Car class */
  cloneCar() {
    return this;
  }
}
