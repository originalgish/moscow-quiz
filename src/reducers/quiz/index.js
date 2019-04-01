import {
  GET_POSITION,
  GET_QUESTION,
  TOGGLE_QUESTION_MODAL,
  CHANGE_TOTAL_SPENT_TIME,
  TOGGLE_LEADERBOARD_MODAL,
  GET_LEADERBOARD
} from '../../constants'

const initialState = {
  position: {},
  question: {},
  questionModalIsShown: false,
  totalTimeSpent: 0,
  leaderboardIsShown: false,
  leaderboard: []
}

const quiz = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSITION:
      return {
        ...state,
        position: payload
      }
    case GET_QUESTION:
      return {
        ...state,
        question: payload
      }
    case TOGGLE_QUESTION_MODAL:
      return {
        ...state,
        questionModalIsShown: payload
      }
    case CHANGE_TOTAL_SPENT_TIME:
      return {
        ...state,
        totalTimeSpent: payload
      }
    case TOGGLE_LEADERBOARD_MODAL:
      return {
        ...state,
        leaderboardIsShown: payload
      }
    case GET_LEADERBOARD:
      return {
        ...state,
        leaderboard: payload
      }
    default:
      return state
  }
}

export default quiz
