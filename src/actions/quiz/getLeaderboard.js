import { GET_LEADERBOARD, TOGGLE_LEADERBOARD_MODAL } from '../../constants'
import history from '../../routes/history'
import { URLs, keys } from '../../keys'
import { GET } from '../../api/fetch'

const getLeaderboard = () => async dispatch => {
  // const url = `${URLs.mock200}`
  const token = localStorage.getItem(keys.accessToken)
  const url = `${URLs.production}/api/v1/get_leaderboard`
  const request = await GET(url, token)
  const response = {
    data: await request.json(),
    status: request.status
  }
  const { data, status } = response
  if (status === 200) {
    dispatch({
      type: GET_LEADERBOARD,
      payload: data
    })
    dispatch({
      type: TOGGLE_LEADERBOARD_MODAL,
      payload: true
    })
  } else {
    history.push('/login')
  }

  return request
}

export default getLeaderboard
