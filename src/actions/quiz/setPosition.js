import { CHANGE_TOTAL_SPENT_TIME } from '../../constants'
import { URLs, keys } from '../../keys'
import { POST } from '../../api/fetch'
import getPosition from './getPosition'

const setPosition = state => async dispatch => {
  // const url = `${URLs.mock200}`
  const token = localStorage.getItem(keys.accessToken)
  const url = `${URLs.production}/api/v1/set_position`
  const request = await POST(url, state, token)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: CHANGE_TOTAL_SPENT_TIME,
      payload: data.total_seconds
    })
    dispatch(getPosition())
  }

  return request
}

export default setPosition
