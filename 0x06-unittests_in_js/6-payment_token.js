function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) resolve({ data: 'Successful response from the API' });
    resolve(undefined);
  });
}

module.exports = getPaymentTokenFromAPI;
