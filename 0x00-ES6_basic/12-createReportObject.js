export default function createReportObject(employeesList) {
  const reports = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const numDept = Object.keys(employeesList).length;
      return numDept;
    },
  };
  return reports;
}
