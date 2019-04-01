import { GET_QUESTION, TOGGLE_QUESTION_MODAL } from '../../constants'
import { URLs, keys } from '../../keys'
import { POST } from '../../api/fetch'

const getQuestion = state => async dispatch => {
  // const url = `${URLs.mock_get_question}`
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
    dispatch({
      type: TOGGLE_QUESTION_MODAL,
      payload: true
    })
  }

  return request
}

export default getQuestion
