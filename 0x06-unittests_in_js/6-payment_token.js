async function getPaymentTokenFromAPI(success: boolean) {
  if (success) {
    await new Promise((resolve) => {
      resolve({data: 'Successful response from the API' });
    });
  } else {
    return;
  }
}

module.exports = getPaymentTokenFromAPI;
