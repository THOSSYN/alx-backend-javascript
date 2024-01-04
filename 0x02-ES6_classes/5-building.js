/*export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.checkForAbstractMethods();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }

  checkForAbstractMethods() {
    if (this.constructor.abstractMethods === undefined) {
      throw new Error('No abstract methods defined');
    }
    const abstractMethods = this.constructor.abstractMethods;
    for (const method of abstractMethods) {
      if (!(method in this)) {
        throw new Error(`Class extending Building must override ${method}`);
      }
    }
  }
}

Building.abstractMethods = ['evacuationWarningMessage'];*/


/*export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}*/

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage must be overridden');
  }
}
