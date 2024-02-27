const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    const lineLength = lines.length;
    const fieldCount = {};
    const nameList = {};

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(',');
      const firstName = line[0];
      const field = line[3];

      fieldCount[field] = (fieldCount[field] || 0) + 1;

      if (!nameList[field]) {
        nameList[field] = [];
      }

      nameList[field].push(firstName);
    }

    console.log(`Number of students: ${lineLength - 2}`);
    console.log(`Number of students in CS: ${nameList['CS'] ? nameList['CS'].length : 0} List: ${nameList['CS'] ? nameList['CS'].join(', ') : ''}`);
    console.log(`Number of students in SWE: ${nameList['SWE'] ? nameList['SWE'].length : 0}. List: ${nameList['SWE'] ? nameList['SWE'].join(', ') : ''}`);
  } catch (err) {
    console.error('Error: Cannot load the database');
  }
}

module.exports = countStudents;
