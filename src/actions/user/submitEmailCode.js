import { mapKeys } from 'lodash'
import { SUBMIT_EMAIL_CODE_ERROR } from '../../constants'
import changeRegistrationStage from './changeRegistrationStage'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'
import { submitCodeErrors } from '../../api/errorCodes'

const KEYS_MAPPING = {
  emailConfirmationCode: 'code'
}

const mapStateKeys = state => {
  const mappedKeys = mapKeys(state, (value, key) => (KEYS_MAPPING[key] ? KEYS_MAPPING[key] : key))
  return mappedKeys
}

const submitEmailCode = state => async dispatch => {
  dispatch({
    type: SUBMIT_EMAIL_CODE_ERROR,
    payload: ''
  })

  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/authenticate_email`
  const request = await POST(url, mapStateKeys(state))
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch(changeRegistrationStage('registerUser'))
  } else {
    dispatch({
      type: SUBMIT_EMAIL_CODE_ERROR,
      payload: submitCodeErrors(status)
    })
  }

  console.log(data, status)
  return request
}

export default submitEmailCode
