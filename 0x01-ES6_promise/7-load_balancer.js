export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any(chinaDownload, USDownload)
    .then((result) => result)
    .catch(() => {
        console.log(new Error()));
}
