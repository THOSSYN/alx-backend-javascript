const fs = require('fs').promises;
const { promisify } = require('util');

const readDatabase = function(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8')
      .then(data => {
        const lines = data.split('\n');
        const objOfNameArray = {};
        for (let i = 1; i < lines.length - 1; i += 1) {
          const firstName = lines[i].split(',')[0];
          const field = lines[i].split(',')[3];
          if (!objOfNameArray[field]) {
            objOfNameArray[field] = [];
          }
          objOfNameArray[field].push(firstName);
        }
        resolve(objOfNameArray);
      })
      .catch(err => {
        reject(new Error(err));
      });
  });
}

module.exports = readDatabase;

/* async function readDatabase(filePath) {
  try {
    const data = await fs.readFileAsync(filePath, 'utf8');
    const lines = data.split('\n');
    const studentData = {};

    lines.forEach(line => {
      const [firstName, _, __, field] = lines.split(',');
      if (!studentData[field]) {
        studentData[field] = [];
      }
      studentData[field].push(firstName);
    });
    return studentData;
  } catch (err) {
    throw error;
  }
} */
