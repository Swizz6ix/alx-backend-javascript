interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(teacher: printTeacherFunction) {
  return `${teacher.firstName[0]}. ${teacher.lastName}`;
}

interface StudentDetails {
  _firstName: string;
  _lastName: string;
}

interface StudentConstruct {
  firstName: string;
  lastName: string;
}
class StudentClass implements StudentDetails {
  _firstName: string;
  _lastName: string;
  constructor(student: StudentConstruct) {
    this._firstName = student.firstName;
    this._lastName = student.lastName;
  }
  workOnHomeWork() {
    return 'Currently working';
  }
  displayName() {
    return this._firstName;
  }
}
