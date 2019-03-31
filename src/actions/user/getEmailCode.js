import { GET_EMAIL_CODE_ERROR } from '../../constants'
import changeRegistrationStage from './changeRegistrationStage'
import { URLs } from '../../keys'
import { POST } from '../../api/fetch'
import { getEmailCodeErrors } from '../../api/errorCodes'

const getEmailCode = state => async dispatch => {
  dispatch({
    type: GET_EMAIL_CODE_ERROR,
    payload: ''
  })

  // const url = `${URLs.mock200}`
  const url = `${URLs.production}/api/v1/initialize_email`
  const request = await POST(url, state)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch(changeRegistrationStage('submitEmailCode'))
  } else {
    dispatch({
      type: GET_EMAIL_CODE_ERROR,
      payload: getEmailCodeErrors(status)
    })
  }

  console.log(data, status)
  return request
}

export default getEmailCode
