const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const line = data.trim().split('\n');
      process.stdout.write(
        `Number of students: ${line.length - 1}\n`,
      );

      // Remove csv column header
      const fileBody = line.splice(1);
      const fieldGroups = [];
      const fieldCount = {};

      for (let i = 0; i < fileBody.length; i += 1) {
        const field = fileBody[i].split(',')[3].trim('\r');
        if (!fieldGroups.includes(field)) {
          fieldGroups.push(field);
        }
      };
      for (let i = 0; i < fieldGroups.length; i += 1) {
        fieldCount[fieldGroups[i]] = { count: 0, list: [] };
        for (let j = 0; j < fileBody.length; j += 1) {
          const currentField = fileBody[j].trim('\r').split(',');
          if (currentField.includes(fieldGroups[i])) {
            fieldCount[fieldGroups[i]].count += 1;
            fieldCount[fieldGroups[i]].list.push(
              fileBody[j].split(',')[0],
            );
          }
        }
        console.log(
          `Number of students in ${fieldGroups[i]}: ${fieldCount[fieldGroups[i]].count}. List: ${fieldCount[fieldGroups[i]].list.join(', ')}`,
        );
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
