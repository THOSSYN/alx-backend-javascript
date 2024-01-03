export default function handleResponseFromAPI(promise) {
  const res = {
    status: 200,
    body: 'success',
  };

  return promise.then(
    () => {
      console.log('Got a response from the API');
      return res;
    },
    () => {
      console.log('Got a response from the API');
      return new Error('');
    },
  );
}
