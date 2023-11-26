const { default: readDatabase } = require('../utils')

const VALID_MAJOR = ['CS', 'SWE'];
const path = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static getAllStudent(request, response) {
    readDatabase(path)
    .then((studentGroups) => {
      const responseParts = ['This is the list of our students'];
      const cmpFxn = (a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      };

      for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
        responseParts.push(
          [
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group
            .map((student) => student.firstname)
            .join(', ')
          ].join(' '),
        );
        }
        response.status(200).send(responseParts.join('\n'));
    })
    .catch((err) => {
      response
      .status(500)
      .send(err instanceof Error ? err.message : err.toString());
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!VALID_MAJOR.includes(major)) {
      response
      .status(500)
      .send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
    .then((studentGroups) => {
      let responseText = '';

      for (const group of Object.entries(studentGroups)) {
        if (Object.keys(studentGroups).includes(major)) {
          responseText = `List: ${
            group[1]
            .map((student) => student.firstname)
            .join(', ')
          }`;
        }
      }
      response
      .status(500)
      .send(responseText);
    })
    .catch((err) => {
      response
      .status(500)
      .send(err instanceof Error ? err.message : err.toString());
    })
  }
}

export default StudentsController;
