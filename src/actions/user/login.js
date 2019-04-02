import history from '../../routes/history'
import { LOGIN_ERROR, AUTH_USER } from '../../constants'
import { URLs, keys } from '../../keys'
import { POST } from '../../api/fetch'
import { loginErrors } from '../../api/errorCodes'

const login = state => async dispatch => {
  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/login`
  const request = await POST(url, state)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    if (data.access_token) {
      localStorage.setItem(keys.accessToken, data.access_token)
      dispatch({
        type: AUTH_USER,
        payload: true
      })
      history.push('/quiz')
    }
  } else {
    dispatch({
      type: LOGIN_ERROR,
      payload: loginErrors(status)
    })
    setTimeout(() => {
      dispatch({
        type: LOGIN_ERROR,
        payload: ''
      })
    }, 2000)
  }

  console.log(data, status)
  return request
}

export default login
