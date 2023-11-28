const Utils = require("./utils")

/**
 * Calls calculateNumber function/method in the util module
 * @param {number} totalAmount 
 * @param {number} totalShipping 
 */

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const amountDue = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${amountDue}`);
};
sendPaymentRequestToApi(100.6, 131.6);
module.exports = sendPaymentRequestToApi;
