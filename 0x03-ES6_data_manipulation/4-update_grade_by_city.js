export default function updateStudentGradeByCity(arrObj, city, newGrades) {
  return arrObj
    .filter((obj) => obj.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => student.id === grade.studentId);

      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });
}
