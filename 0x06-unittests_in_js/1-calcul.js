/**
 * A function that rounds up maths calculations
 * @param {string} type 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

const calculateNumber = (type, a, b) => {
  if (type === 'DIVIDE' & Math.round(b) === 0) {
    return 'Error';
  }
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      return Math.round(a) / Math.round(b);
  }
}

module.exports = calculateNumber
