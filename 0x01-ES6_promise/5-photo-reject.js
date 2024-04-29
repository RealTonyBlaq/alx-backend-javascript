export default function uploadPhoto(filename) {
  if (filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }
  throw Error();
}
