const express = require('express');
const fs = require('fs');

const host = 'localhost';
const port = 1245;
const app = express();
const file = process.argv[2] || 'database.csv';
module.exports = app;

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const myPromise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const studentsInfo = data.split('\n').filter((line) => line.trim() !== '');
      studentsInfo.shift();
      const numOfStudents = studentsInfo.length;
      let resInfo = `This is the list of our students
Number of students: ${numOfStudents}\n`;
      const studentsInField = {};

      studentsInfo.forEach((row) => {
        const studentInfo = row.split(',');
        const field = studentInfo.pop();
        const name = studentInfo.shift();

        if (!studentsInField[field]) studentsInField[field] = [];
        studentsInField[field].push(name);
      });

      for (const [field, listOfNames] of Object.entries(studentsInField)) {
        const numStudents = listOfNames.length;
        const names = listOfNames.join(', ');
        const fieldInfo = `Number of students in ${field}: ${numStudents}. List: ${names}\n`;
        resInfo += fieldInfo;
      }
      resolve(resInfo);
    });
  });

  myPromise
    .then((resInfo) => {
      res.status(200).send(resInfo.slice(0, -1));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('This is the list of our students\nCannot load the database');
    });
});
app.listen(port, host);
