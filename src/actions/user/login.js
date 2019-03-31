import history from '../../routes/history'
import { LOGIN_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'
import { loginErrors } from '../../api/errorCodes'

const Login = state => async dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    payload: ''
  })
  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/login`
  const request = await POST(url, state)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    history.push('/quiz')
  } else {
    dispatch({
      type: LOGIN_ERROR,
      payload: loginErrors(status)
    })
  }

  console.log(data, status)
  return request
}

export default Login
