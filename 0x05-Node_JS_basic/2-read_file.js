const fs = require('fs');

function countStudents(pathName) {
  try {
    const data = fs.readFileSync(pathName, 'utf8');
    const lines = data.split('\n');

    // Check if the last element in lines is an empty string and exclude it if present
    const lineLength = lines[lines.length - 1] === '' ? lines.length - 1 : lines.length;

    const fieldCount = {};
    const nameList = {};

    // Start iterating from the second line to exclude the header
    // for (let i = 1; i < lines.length; i++) {
    for (const line of lines) {
      // const line = lines[i];
      const columns = line.split(',');
      const field = columns[3];
      const firstName = columns[0];

      fieldCount[field] = (fieldCount[field] || 0) + 1;

      if (!nameList[field]) {
        nameList[field] = [];
      }

      nameList[field].push(firstName);
    }
    // Subtract 1 for the header line
    console.log(`Number of students: ${lineLength - 1}`);

    console.log(`Number of students in CS: ${fieldCount.CS || 0}. List: ${nameList.CS ? nameList.CS.join(', ') : 'None'}`);

    console.log(`Number of students in SWE: ${fieldCount.SWE || 0}. List: ${nameList.SWE ? nameList.SWE.join(', ') : 'None'}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
