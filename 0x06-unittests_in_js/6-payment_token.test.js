const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch((err) => {
      done(err);
    });
  });

  it('should not return anything when success is false', (done) => {
    getPaymentTokenFromAPI(false).then((response) => {
      expect(response).to.be.undefined;
      done();
    }).catch((err) => {
      done(err);
    });
  });
});
