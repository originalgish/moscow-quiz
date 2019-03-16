import { LOG_IN, LOG_OUT, LOG_IN_ERROR } from '../../constants'

const initialState = {
  isAuthenticated: false,
  loginError: false
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      }
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false
      }

    case LOG_IN_ERROR:
      return {
        ...state,
        loginError: payload
      }

    default:
      return state
  }
}

export default user
