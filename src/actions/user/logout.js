import { AUTH_USER } from '../../constants'

const logout = () => async dispatch => {
  dispatch({
    type: AUTH_USER,
    payload: false
  })
}

export default logout
