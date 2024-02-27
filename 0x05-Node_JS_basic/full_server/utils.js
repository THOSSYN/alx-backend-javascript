const fs = require('fs').promises;
const { promisify } = require('util');
const readFileAsync = util.promisify(fs.readFile);

async function readDatabase(filePath) {
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
}

module.exports = readDatabase;
