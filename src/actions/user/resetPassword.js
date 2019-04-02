import { RESET_PASSWORD_ERROR, HAS_RESET_PASSWORD } from '../../constants'
import history from '../../routes/history'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'
import { resetPasswordsErrors } from '../../api/errorCodes'

const resetPassword = state => async dispatch => {
  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/remind_password`
  const request = await POST(url, state)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: HAS_RESET_PASSWORD,
      payload: true
    })
    setTimeout(() => {
      dispatch({
        type: HAS_RESET_PASSWORD,
        payload: false
      })
    }, 2000)
    history.push('/login')
  } else {
    dispatch({
      type: RESET_PASSWORD_ERROR,
      payload: resetPasswordsErrors(status)
    })
    setTimeout(() => {
      dispatch({
        type: RESET_PASSWORD_ERROR,
        payload: ''
      })
    }, 2000)
  }

  console.log(data, status)
  return request
}

export default resetPassword
