import { AUTH_USER } from '../../constants'

const logout = () => async dispatch => {
  console.log(123)
  dispatch({
    type: AUTH_USER,
    payload: false
  })
}

export default logout
