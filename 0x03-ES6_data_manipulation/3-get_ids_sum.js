export default function getStudentIdsSum(arrObj) {
  if (!Array.isArray(arrObj)) {
    return 0;
  }

  const result = arrObj.reduce((sum, obj) => sum + obj.id, 0);

  return result;
}
