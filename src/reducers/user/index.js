import {
  CHANGE_REGISTRATION_STAGE,
  GET_PHONE_CODE_ERROR,
  SUBMIT_PHONE_CODE_ERROR,
  GET_EMAIL_CODE_ERROR,
  SUBMIT_EMAIL_CODE_ERROR,
  REGISTER_USER_ERROR,
  LOGIN_ERROR,
  AUTH_USER
} from '../../constants'

import { keys } from '../../keys'

const isAuthenticated = window.localStorage.getItem(keys.accessToken) !== null

const initialState = {
  registrationStage: 'getPhoneCode',
  isAuthenticated
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_REGISTRATION_STAGE:
      return {
        ...state,
        registrationStage: payload
      }
    case GET_PHONE_CODE_ERROR:
      return {
        ...state,
        getPhoneErrorText: payload
      }
    case SUBMIT_PHONE_CODE_ERROR:
      return {
        ...state,
        submitPhoneErrorText: payload
      }
    case GET_EMAIL_CODE_ERROR:
      return {
        ...state,
        getEmailErrorText: payload
      }
    case SUBMIT_EMAIL_CODE_ERROR:
      return {
        ...state,
        submitEmailErrorText: payload
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        registerUserErrorText: payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrorText: payload
      }
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: payload
      }

    default:
      return state
  }
}

export default user
