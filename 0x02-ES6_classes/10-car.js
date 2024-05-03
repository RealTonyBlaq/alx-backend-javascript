export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* creates a new instance of a Car class */
  cloneCar() {
    return this.Car(this._brand, this._motor, this._color);
  }
}
