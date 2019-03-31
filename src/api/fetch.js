const GET = async (url = '') =>
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

const POST = async (url = '', data, token) =>
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify(data)
  })

export { GET, POST }
