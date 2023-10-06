interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Emma',
  lastName: 'Chukwu',
  age: 32,
  location: 'Liverpool',
}

const student2: Student = {
  firstName: 'Basil',
  lastName: 'Nweke',
  age: 33,
  location: 'Abuja',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tableBody');

for (const student of studentsList) {
  const tableRow = document.createElement('tableRow');
  const firstName = document.createElement('td');
  const location = document.createElement('td');

  firstName.textContent = student.firstName;
  location.textContent = student.location;
  tableRow.appendChild(firstName);
  tableRow.appendChild(location);
  tableBody.appendChild(tableRow);
}
table.appendChild(tableBody);
document.body.appendChild(table)