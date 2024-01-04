import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const cloneFromCar = super.cloneCar();
    const newCar = new Car(cloneFromCar._brand, cloneFromCar._brand, cloneFromCar._brand);
    return newCar;
  }
}
