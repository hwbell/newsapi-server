var fetch = require('node-fetch');

// the url has been constructed on the front end with different query / date params. all the server does is proxy the fetch for the constructed url, using the key stored here on the backend === 0 exposure

const getArticles = async function(url) {
  // console.log(url)
  
  let headers = {
    Authorization: process.env.VUE_APP_NEWSAPIKEY,
    "Access-Control-Allow-Origin": "*",
  };

  let serverResponse = await fetch(url, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.log(err));

  // console.log(serverResponse);

  return serverResponse;
}

module.exports = {
  getArticles
}