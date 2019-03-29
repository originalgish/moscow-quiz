import { CHANGE_REGISTRATION_STAGE, GET_CODE_ERROR, SUBMIT_CODE_ERROR, REGISTER_USER_ERROR } from '../../constants'

const initialState = {
  registrationStage: 'getCode',
  getErrorText: '',
  submitErrorText: '',
  registerUserErrorText: ''
}

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_REGISTRATION_STAGE:
      return {
        ...state,
        registrationStage: payload
      }
    case GET_CODE_ERROR:
      return {
        ...state,
        getErrorText: payload
      }
    case SUBMIT_CODE_ERROR:
      return {
        ...state,
        submitErrorText: payload
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        registerUserErrorText: payload
      }

    default:
      return state
  }
}

export default user
