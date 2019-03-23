import { CHANGE_REGISTRATION_STAGE, SUBMIT_CODE_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'

const normalizeValues = state => {
  const normalizedValues = {
    ...state,
    phone: state.phone.replace(/\D/g, '')
  }
  return normalizedValues
}

const submitCode = state => async dispatch => {
  const url = `${URLs.mock200}`
  const request = await POST(url, normalizeValues(state))
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: CHANGE_REGISTRATION_STAGE,
      payload: 'registerUser'
    })
  } else {
    dispatch({
      type: SUBMIT_CODE_ERROR,
      payload: 'Код не тот'
    })
  }

  console.log(data, status)
  return request
}

export default submitCode
