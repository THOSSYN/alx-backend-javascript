export default function getListStudentIds(arrObj) {
  const result = [];
  if (!Array.isArray(arrObj)) {
    return [];
  }
  arrObj.map((obj) => result.push(obj.id));
  return result;
}
