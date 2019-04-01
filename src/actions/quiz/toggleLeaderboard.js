import { TOGGLE_LEADERBOARD_MODAL } from '../../constants'

const toggleLeaderboard = needToShow => dispatch => {
  dispatch({
    type: TOGGLE_LEADERBOARD_MODAL,
    payload: needToShow
  })
}

export default toggleLeaderboard
