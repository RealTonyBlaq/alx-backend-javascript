export default function uploadPhoto(filename) {
  if (filename instanceof String) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }
  
}
