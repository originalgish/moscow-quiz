import { mapKeys } from 'lodash'

import { CHANGE_REGISTRATION_STAGE, SUBMIT_CODE_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'

const KEYS_MAPPING = {
  confirmationCode: 'code'
}

const mapStateKeys = state => {
  const mappedKeys = mapKeys(state, (value, key) => (KEYS_MAPPING[key] ? KEYS_MAPPING[key] : key))
  return normalizeValues(mappedKeys)
}

const normalizeValues = state => {
  const normalizedValues = {
    ...state,
    phone: state.phone.replace(/\D/g, '')
  }
  return normalizedValues
}

const submitCode = state => async dispatch => {
  dispatch({
    type: SUBMIT_CODE_ERROR,
    payload: ''
  })

  const url = `${URLs.mock400}`
  // const url = `${URLs.production}/api/v1/authenticate_phone`
  const request = await POST(url, mapStateKeys(state))
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
    if (status === 400) {
      dispatch({
        type: SUBMIT_CODE_ERROR,
        payload: 'Неправильно введен код'
      })
    } else {
      dispatch({
        type: SUBMIT_CODE_ERROR,
        payload: 'Произошла ошибка, попробуйте снова'
      })
    }
  }

  console.log(data, status)
  return request
}

export default submitCode