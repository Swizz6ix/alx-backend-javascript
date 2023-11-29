const http = require('http');
const fs = require('fs');

const DB_FILENAME = process.argv.length > 2 ? process.argv[2] : '';

/**
 * @param (string) path
 * @return list of strings
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    const output = [];
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      const line = data.trim().split('\n');
      output.push(`Number of students: ${line.length - 1}`);
      // Remove csv column header
      const fileBody = line.splice(1);
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
          `Number of students in ${fieldGroups[i]}: ${fieldCount[fieldGroups[i]].count}. List: ${fieldCount[
            fieldGroups[i]
          ].list.join(', ')}`,
        );
      }
      resolve(output);
    }
  });
});

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const result = await countStudents(DB_FILENAME);
      console.log('see', result);
      res.write('This is the list of our students\n');
      res.end(result.join('\n'));
    } catch (error) {
      res.write('This is the list of our students\n');
      res.end(`${error.message}`);
    }
  }
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
