const readDatabase = require('../full_server/utils');

class StudentsController {
  static getAllStudents(request, response) {
    try {
      const studentData = readDatabase(); 
      const fieldList = Object.keys(studentData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      
      let output = 'This is the list of our students\n';
      
      fieldList.forEach(field => {
        const students = studentData[field].join(', ');
        output += `Number of students in ${field}: ${studentData[field].length}. List: ${students}\n`;
      });
      
      response.status(200).send(output);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.query;
      if (!major || (major !== 'SWE' && major !== 'CS')) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }
      
      const studentData = readDatabase();
      
      if (!studentData[major]) {
        response.status(200).send(`No students found for major ${major}`);
        return;
      }
      
      const firstNameList = studentData[major].join(', ');
      const output = `List: ${firstNameList}`;

      response.status(200).send(output);
    } catch (err) {
      console.error(err);
      response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
