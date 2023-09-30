// Finally, write a function named iterateThroughObject. The function’s parameter
// reportWithIterator is the return value from createIteratorObject.
export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}
