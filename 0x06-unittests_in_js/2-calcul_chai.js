function calculateNumber(a, b, type='SUM') {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    if (Math.round(b) !== 0) {
      return Math.round(a) / Math.round(b);
    } else {
      return 'Error';
    }
  }
}

/*console.log(calculateNumber('SUM', 1.4, 4.5));
console.log(calculateNumber('SUBTRACT', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 4.5));
console.log(calculateNumber('DIVIDE', 1.4, 0));*/
module.exports = calculateNumber;
