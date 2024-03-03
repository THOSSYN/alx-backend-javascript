/*const Utils = require('./utils');
const calculateNumber = Utils.calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber(totalAmount, totalShipping, 'SUM');
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;*/
// 3-payment.js
const Utils = require('./utils');
// const calculateNumber = Utils.calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber(totalAmount, totalShipping, 'SUM');
  console.log(`The total is: ${result}`);
}

// sendPaymentRequestToApi(100, 20)
module.exports = sendPaymentRequestToApi;
