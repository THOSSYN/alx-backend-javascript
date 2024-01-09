export default function cleanSet(set, startString) {
  const setArray = [...set];
  const newValue = [];

  if (startString === '') {
    return '';
  }
  for (const item of setArray) {
    if (item.startsWith(startString) && item.includes(startString)) {
      newValue.push(item.slice(startString.length));
    }
  }
  return newValue.join('-');
}
