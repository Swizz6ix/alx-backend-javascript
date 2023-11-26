const expect = require('chai').expect;
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', function () {
  it('Should successfully call endpoint', function (done) {
    getPaymentTokenFromApi(true)
    .then((response) => {
      expect(response.data).to.be.equal('Successful response from the API');
      done();
    });
  });
});
