export default function getResponseFromAPI() {
  const myPromise = new Promise((myResolve, myReject) => {
    myResolve('Success data');
    myReject(new Error('Error data'));
  });

  return myPromise;
}
