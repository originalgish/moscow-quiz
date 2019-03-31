import { GET_POSITION, GET_QUESTION, TOGGLE_QUESTION_MODAL } from '../../constants'

const initialState = {
  position: {},
  question: {},
  questionModalIsShown: false
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
    default:
      return state
  }
}

export default quiz
