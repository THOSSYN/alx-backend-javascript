/* export default function getStudentsByLocation(arrObj, city) {
  const result = [];

  if (!Array.isArray(arrObj)) {
    return [];
  }
  arrObj.filter((obj) => {
    if (city in obj) {
      result.push(obj);
    }
  });
} */
export default function getStudentsByLocation(arrObj, city) {
  if (!Array.isArray(arrObj)) {
    return [];
  }

  const result = arrObj.filter((obj) => obj.location === city);
  return result;
}
