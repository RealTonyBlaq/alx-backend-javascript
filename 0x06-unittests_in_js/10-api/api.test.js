const request = require('request');
const { expect } = require('chai');
const { response } = require('express');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return status 200', (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 status code', (done) => {
    request(`${url}/cart/hello`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 200 status code', (done) => {
    request(`${url}/cart/5`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Payment methods for cart :id"', (done) => {
    request(`${url}/cart/5`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 5');
      done();
    });
  });

  it('should return "Welcome Betty"', (done) => {
    request.post(`${url}/login`, { userName: 'Betty' }, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the object', (done) => {
    request(`${url}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});
