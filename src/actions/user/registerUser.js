import { mapKeys } from 'lodash'

import history from '../../routes/history'
import { REGISTER_USER_ERROR } from '../../constants'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'

const KEYS_MAPPING = {
  firstName: 'name',
  lastName: 'surname',
  nickName: 'nickname'
}

const mapStateKeys = state => {
  const mappedKeys = mapKeys(state, (value, key) => (KEYS_MAPPING[key] ? KEYS_MAPPING[key] : key))
  delete mappedKeys.policyAgreement
  delete mappedKeys.confirmPassword
  mappedKeys['_id'] = 2
  return normalizeValues(mappedKeys)
}

const normalizeValues = state => {
  const normalizedValues = {
    ...state,
    phone: state.phone.replace(/\D/g, '')
  }
  return normalizedValues
}

const getCode = state => async dispatch => {
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
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: 'Ошибка регистрации'
    })
  }

  console.log(data, status)
  return request
}

export default getCode
