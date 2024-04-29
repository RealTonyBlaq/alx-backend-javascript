export default getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) resolve({status: 200, })
  });
}
