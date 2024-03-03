const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const fileName = process.argv[2];
      const data = fs.readFileSync(fileName, 'utf8');
      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
      const nameList = {};
      const fieldCount = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const firstName = fields[0].trim();
        const field = fields[3].trim();

        fieldCount[field] = (fieldCount[field] || 0) + 1;

        if (!nameList[field]) {
          nameList[field] = [];
        }

        nameList[field].push(firstName);
      });

      const lineLength = lines.length - 1; // Subtract header line
      const csStudents = nameList.CS ? nameList.CS.length : 0;
      const sweStudents = nameList.SWE ? nameList.SWE.length : 0;

      let response = 'This is the list of our students\n';
      response += `Number of students: ${lineLength}\n`;
      response += `Number of students in CS: ${csStudents}. List: ${nameList.CS ? nameList.CS.join(', ') : ''}\n`;
      response += `Number of students in SWE: ${sweStudents}. List: ${nameList.SWE ? nameList.SWE.join(', ') : ''}\n`;

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error\n');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
