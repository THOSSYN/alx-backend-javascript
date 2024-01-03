export default function createIteratorObject(report) {
  const employees = [];

  for (const deptEmployees of Object.values(report.allEmployees)) {
    employees.push(...deptEmployees);
  }

  const iter = employees[Symbol.iterator]();
  const result = [];

  let nextEmployee = iter.next();
  while (!nextEmployee.done) {
    result.push(nextEmployee.value);
    nextEmployee = iter.next();
  }

  return result;
}
