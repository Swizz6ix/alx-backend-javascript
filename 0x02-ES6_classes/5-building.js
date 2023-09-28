export default class Building {
    constructor(sqft) {
        if (typeof this.evacuationWarningMessage !== 'function' 
                && this.constructor !== Building )
                throw new TypeError('Class extending BUilding must override evacuationMessage');
        this._sqft = sqft;
    };

    get sqft () {
        return this._sqft;
    };

    set sqft (sqft) {
        if (typeof sqft !== 'number')
            throw new TypeError("sqft must be a number")
        return this._sqft = sqft;
    };
}