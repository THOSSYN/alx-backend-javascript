const Utils = require('./utils').Utils;
const calculateNumber = Utils.calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber(totalAmount, totalShipping, 'SUM');
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
