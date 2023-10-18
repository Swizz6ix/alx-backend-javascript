export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new TypeError('Class extending BUilding must override evacuationMessage');
      }
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') { throw new TypeError('sqft must be a number'); }
    this._sqft = sqft;
  }
}
