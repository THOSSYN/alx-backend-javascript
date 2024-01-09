export default function getStudentsByLocation(arrObj, city) {
  if (!Array.isArray(arrObj)) {
    return [];
  }
  return arrObj.filter((obj) => obj.location === city);
}
