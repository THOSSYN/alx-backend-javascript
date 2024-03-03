const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    if (process.argv.length === 3) {
      const fileName = process.argv[2];
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          res.status(500).send('Error reading file');
        } else {
          const lines = data.split('\n');
          const lineLength = lines.length;
          const fieldCount = {};
          const nameList = {};

          for (let i = 1; i < lineLength; i += 1) {
            const line = lines[i].split(',');
            const field = line[3];
            const firstName = line[0];

            fieldCount[field] = (fieldCount[field] || 0) + 1;

            if (!nameList[field]) {
              nameList[field] = [];
            }
            nameList[field].push(firstName);
          }
          const csStudents = nameList.CS ? nameList.CS.length : 0;
          const sweStudents = nameList.SWE ? nameList.SWE.length : 0;

          let response = 'This is the list of our students\n';
          response += `Number of students: ${lineLength - 2}\n`;
          response += `Number of students in CS: ${csStudents}. List: ${nameList.CS ? nameList.CS.join(', ') : ''}\n`;
          response += `Number of students in SWE: ${sweStudents}. List: ${nameList.SWE ? nameList.SWE.join(', ') : ''}\n`;

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(response);
        }
      });
    }
  } catch (err) {
    res.status(500).send('Error reading file');
  }
});

app.listen(port);

module.exports = app;
