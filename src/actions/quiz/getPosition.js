import { GET_POSITION, CHANGE_TOTAL_SPENT_TIME } from '../../constants'
import history from '../../routes/history'
import { URLs, keys } from '../../keys'
import { GET } from '../../api/fetch'

const getPosition = () => async dispatch => {
  // const url = `${URLs.mock200}`
  const token = localStorage.getItem(keys.accessToken)
  const url = `${URLs.production}/api/v1/get_position`
  const request = await GET(url, token)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: GET_POSITION,
      payload: data
    })
    dispatch({
      type: CHANGE_TOTAL_SPENT_TIME,
      payload: data.positions.total_time
    })
  } else {
    history.push('/login')
  }

  return request
}

export default getPosition
