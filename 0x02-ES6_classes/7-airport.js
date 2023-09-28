export default class Airport {
    constructor (name, code) {
        this._name = name,
        this._code = code
    };

    get name () {
        return this._name;
    };

    set name (name) {
        if (typeof name !== 'string')
            throw new TypeError('name must be a string');
        return this._name = name;
    }

    get code () {
        return this._code;
    };

    set code (code) {
        if (typeof code !== 'string')
            throw new TypeError('code must be a string');
        return this._code = code;
    };

    get [Symbol.toStringTag]() {
        return this._code;
    }
}