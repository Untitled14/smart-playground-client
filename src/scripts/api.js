const BASE_URL='https://smart-playground.herokuapp.com/api'
// const BASE_URL=`${window.location.origin}/api`;

function httpGet(path, params) {
  return fetch(fullUrl(path), {
    method: 'GET',
    cache: 'no-cache',
    mode: 'cors',
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(convertResponse)
  .catch(errorHandler)
}

async function convertResponse(response) {
  if (response.redirected) {
    return
  } else if (response.status === 200) {
    return response.json()
  } else if (response.status === 400) {
    const error = {
      status: response.status
    }
    try {
      error.body = await response.json()
    } catch(err) { }
    throw error
  } else {
    throw { status: response.status }
  }
}

function errorHandler(response) {
  console.error('Request Error Handler', response);

  // TODO: Handle error body.
  throw response
}

function fullUrl(path) {
  return `${BASE_URL}/${path}`
}

export default {
  httpGet
}
