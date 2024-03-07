const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' })
      .then((data) => {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Exclude empty lines
        const lineLength = lines.length;
        const fieldCount = {};
        const nameList = {};

        for (let i = 1; i < lines.length; i += 1) {
          const line = lines[i].split(',');
          const firstName = line[0];
          const field = line[3];

          fieldCount[field] = (fieldCount[field] || 0) + 1;

          if (!nameList[field]) {
            nameList[field] = [];
          }

          nameList[field].push(firstName);
        }

        console.log(`Number of students: ${lineLength - 1}`);
        console.log(`Number of students in CS: ${nameList.CS ? nameList.CS.length : 0}. List: ${nameList.CS ? nameList.CS.join(', ') : ''}`);
        console.log(`Number of students in SWE: ${nameList.SWE ? nameList.SWE.length : 0}. List: ${nameList.SWE ? nameList.SWE.join(', ') : ''}`);

        resolve({ lineLength, fieldCount, nameList }); // Resolve with the data
      })
      .catch(() => {
        // console.error('Error: Cannot load the database');
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
