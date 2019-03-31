import { CHANGE_REGISTRATION_STAGE, GET_CODE_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'
import { getPhoneCodeErrors } from '../../api/errorCodes'

const normalizeValues = state => {
  const normalizedValues = {
    ...state,
    phone: state.phone.replace(/\D/g, '')
  }
  return normalizedValues
}

const getPhoneCode = state => async dispatch => {
  dispatch({
    type: GET_CODE_ERROR,
    payload: ''
  })

  const url = `${URLs.mock200}`
  // const url = `${URLs.production}/api/v1/initialize_phone`
  const request = await POST(url, normalizeValues(state))
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: CHANGE_REGISTRATION_STAGE,
      payload: 'submitCode'
    })
  } else {
    dispatch({
      type: GET_CODE_ERROR,
      payload: getPhoneCodeErrors(status)
    })
  }

  console.log(data, status)
  return request
}

export default getPhoneCode