export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      return new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array');
    }

    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Student must be a string');
    }
    this._students = value;
  }
}
