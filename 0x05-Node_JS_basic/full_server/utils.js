const fs = require('fs');

module.exports = function readDatabase(db) {
  return new Promise((resolve, reject) => {
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const studentsInfo = data.split('\n').filter((line) => line.trim() !== '');
      studentsInfo.shift();
      const fieldToStudents = {};
      studentsInfo.forEach((row) => {
        const studentInfo = row.split(',');
        const field = studentInfo.pop();
        const name = studentInfo.shift();

        if (!fieldToStudents[field]) fieldToStudents[field] = [];
        fieldToStudents[field].push(name);
      });

      resolve(fieldToStudents);
    });
  });
};
