/* eslint-disable linebreak-style */
const express = require('express');
const fs = require('fs');

const app = express();

const DB_FILENAME = process.argv.length > 2 ? process.argv[2] : '';

/**
 * @param {string} path
 * @return list of strings
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    const output = [];
    output.push('This is the list of our students');
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const line = data.trim().split('\n');
      output.push(`Number of students: ${line.length - 1}`);

      // Remove cvs column header
      const fileBody = line.slice(1);
      const fieldGroups = [];
      const fieldCount = {};

      for (let i = 0; i < fileBody.length; i += 1) {
        const field = fileBody[i].split(',')[3].trim('\r');
        if (!fieldGroups.includes(field)) {
          fieldGroups.push(field);
        }
      }
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
        output.push(
          `Number of students in ${fieldGroups[i]}: ${
            fieldCount[fieldGroups[i]].count
          }. List: ${fieldCount[fieldGroups[i]].list.join(', ')}`,
        );
      }
      resolve(output);
    }
  });
});
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  try {
    const response = await countStudents(DB_FILENAME);
    const output = response.join('\n');
    res.statusCode = 200;
    res.send(output);
  } catch (error) {
    res.send(`This is the list of our students\n${error}`);
  }
});
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
