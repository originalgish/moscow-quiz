import { GET_QUESTION } from '../../constants'
import { URLs, keys } from '../../keys'
import { POST } from '../../api/fetch'

const getQuestion = state => async dispatch => {
  // const url = `${URLs.mock200}`
  const token = localStorage.getItem(keys.accessToken)
  const url = `${URLs.production}/api/v1/move`
  const request = await POST(url, state, token)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: GET_QUESTION,
      payload: data
    })
  }

  return request
}

export default getQuestion
