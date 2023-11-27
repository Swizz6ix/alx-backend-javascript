const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load database'));
  }
  if (path) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const eachLine = [];
        let studentPropNames;
        for (const lineRow of fileLines) {
          eachLine.push(lineRow.trim('\r'));
        }
        const dbFieldNames = eachLine[0].split(',');
        studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of eachLine.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName, studentPropValues[idx],
          ]);
          studentGroups[field].push(
            Object.fromEntries(studentEntries),
          );
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
