import { CHANGE_REGISTRATION_STAGE, GET_CODE_ERROR, SUBMIT_CODE_ERROR } from '../../constants'

const initialState = {
  registrationStage: 'getCode'
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
        getCodeError: payload
      }
    case SUBMIT_CODE_ERROR:
      return {
        ...state,
        submitCodeError: payload
      }

    default:
      return state
  }
}

export default user
