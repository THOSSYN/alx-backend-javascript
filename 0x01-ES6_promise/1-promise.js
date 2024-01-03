export default function getFullResponseFromAPI(success) {
  const myPromise1 = new Promise((myResolve, myReject) => {
    const response = {
      status: 200,
      body: 'Success',
    };
    if (success === true) {
      myResolve(response);
    } else {
      myReject(new Error('The fake API is not working currently'));
    }
  });

  return myPromise1;
}
