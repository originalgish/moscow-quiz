import { CHANGE_REGISTRATION_STAGE } from '../../constants'

const changeRegistrationStage = newStage => async dispatch => {
  dispatch({
    type: CHANGE_REGISTRATION_STAGE,
    payload: newStage
  })
}

export default changeRegistrationStage
