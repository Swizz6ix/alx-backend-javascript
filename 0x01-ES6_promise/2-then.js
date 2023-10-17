function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return ({
        status: 200,
        body: 'success',
      });
    })
    .catch((error) => {
      return (new Error(error));
    })
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
