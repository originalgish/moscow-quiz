import { mapKeys } from 'lodash'

import history from '../../routes/history'
import { REGISTER_USER_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'

const KEYS_MAPPING = {
  firstName: 'name',
  lastName: 'surname',
  nickName: 'nickname',
  confirmationCode: 'code'
}

const mapStateKeys = state => {
  const mappedKeys = mapKeys(state, (value, key) => (KEYS_MAPPING[key] ? KEYS_MAPPING[key] : key))
  delete mappedKeys.policyAgreement
  delete mappedKeys.confirmPassword
  return normalizeValues(mappedKeys)
}

const normalizeValues = state => {
  const normalizedValues = {
    ...state,
    phone: state.phone.replace(/\D/g, ''),
    code: Number(state.code)
  }
  return normalizedValues
}

const getCode = state => async dispatch => {
  dispatch({
    type: REGISTER_USER_ERROR,
    payload: ''
  })
  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/register`
  const request = await POST(url, mapStateKeys(state))
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    history.push('/login')
  } else {
    if (status === 409) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: 'E-mail или никнейм не уникален'
      })
    } else if (status === 444) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: 'Ошибка соединения с сервером'
      })
    } else {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: 'Произошла ошибка, попробуйте снова'
      })
    }
  }

  console.log(data, status)
  return request
}

export default getCode
