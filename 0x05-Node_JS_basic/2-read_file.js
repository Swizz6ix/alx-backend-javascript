const fs = require("fs");
const { join } = require("path");

export const countStudents = (path) => {
  // if file does not exist or is not a regular file
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error("Cannot load the database");
  }
  const data = fs.readFileSync(path, 'utf-8');
  const line = data.trim().split("\n");
  process.stdout.write(`Number of Students: ${line.length -1}\n`);

  //Remove csv column header
  const fileBody = line.splice(1);
  const fieldGroups = [];
  const fieldCount = {};

  for (let i = 0; i < fileBody.length; i++) {
    const field = fileBody[i].split(",")[3].trim("\r");
    if (fieldGroups.includes(field)) {
      continue;
    } else {
      fieldGroups.push(field);
    }
  }

  for (let i = 0; i < fieldGroups.length; i++) {
    fieldCount[fieldGroups[i]] = { count: 0, list: []};
    for (let j = 0; j < fileBody.length; j++) {
      const currentField = fileBody[j].trim("\r").split(",");
      if (currentField.includes(fieldGroups[i])) {
        fieldCount[fieldGroups[i]]["count"] +=1;
        fieldCount[fieldGroups[j]]["list"].push(
          fileBody[j].split(",")[0]
        );
      }
    }
    console.log(
      `Number of students in ${fieldGroups[i]}: ${
        fieldCount[fieldGroups[j]]["count"]
      }.List: ${fieldCount[fieldGroups[i]]["list"].join(", ")}`
    );
  };
}
