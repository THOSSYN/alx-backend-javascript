/*class Utils {
  calculateNumber(a, b, type = 'SUM') {
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
};

module.exports = Utils;*/
// utils.js
const Utils = {
  calculateNumber: function(a, b, type = 'SUM') {
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
};

module.exports = Utils;
// const utils = require('./utils');
// console.log(utils.calculateNumber(100, 20, 'SUM'));
