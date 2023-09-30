// Write a function named createIteratorObject, that will take into argument a report
// Object created with the previous function createReportObject.
// This function will return an iterator to go through every employee in every department.

export default function createIteratorObject(report) {
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employees of department) {
        yield employees;
      }
    }
  }());
}
