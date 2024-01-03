export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
