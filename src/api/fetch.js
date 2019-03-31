const GET = async (url = '', token) =>
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(token && { Authorization: `JWT ${token}` })
    }
  })

const POST = async (url = '', data, token) =>
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(token && { Authorization: `JWT ${token}` })
    },
    body: JSON.stringify(data)
  })

export { GET, POST }
