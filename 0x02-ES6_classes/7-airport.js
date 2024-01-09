export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return 'SFO';
  }
  /*toString() {
    return `[object ${this._code}]`;
  }*/
}