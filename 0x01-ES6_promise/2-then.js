export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
        return ({ status: 200, body: 'Success' });
    }, () => Error())
    .then()
}
