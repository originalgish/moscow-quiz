// TODO: Проверить все на адекватность

const json = async response => {
  const status = response.status
  let data
  if (status >= 200 && status < 300) {
    data = await response.json()
  }
  return {
    data,
    status
  }
}

const GET = (url = ``) =>
  fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  }).then(response => json(response))

const POST = (url = ``, data = {}) =>
  fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(data)
  }).then(response => json(response))

const fetchPOST = (url, data, callback) => {
  POST(url, data, callback)
    .then(response => callback(response.data, response.status))
    .catch(error => console.error(error))
}

const fetchGET = (url, data, callback) => {
  GET(url, data, callback)
    .then(response => callback(response.data, response.status))
    .catch(error => console.error(error))
}

export { fetchGET, fetchPOST }
