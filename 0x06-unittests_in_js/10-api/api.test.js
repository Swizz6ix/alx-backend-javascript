const request = require('request');
const expect = require('chai').expect;

describe('http://localhost:7865/ get points', function () {
  it('Should make request to api endpoint and validates server request', function (done) {
    request.get('http://localhost:7865/', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('Get client request for cart items of id 60', function (done) {
    request.get('http://localhost:7865/cart/60', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 60');
      done();
    });
  });
  it('Get client request for cart of id -60', function (done) {
    request.get('http://localhost:7865/cart/-60', (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('Get client request for cart of id iPhones', function (done) {
    request.get('http://localhost:7865/cart/iPhones', (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('Get client request for the home page', function (done) {
    request.get('http://localhost:7865/available_payments', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    })
  })
});

describe('Login endpoint', () => {
  it('Returns the right message', (done) => {
    const data = { userName: 'Guillaume' };
    request.post('http://localhost:7865/login', {
      json: {
        userName: 'BobDylan',
      }
    }, (error, response, body) => {
      expect(body).to.equal('Welcome BobDylan');
      done();
    });
  });
  it('Post /login and return valid json response', function (done) {
    request.post('http://localhost:7865/cart/phones', (_, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
