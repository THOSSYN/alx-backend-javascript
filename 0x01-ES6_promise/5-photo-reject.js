export default function uploadPhoto(filename) {
  return new Promise((myResolve, myReject) => {
    myReject(new Error(`${filename} cannot be processed`));
  });
}
