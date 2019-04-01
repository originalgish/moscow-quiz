import { TOGGLE_QUESTION_MODAL } from '../../constants'

const toggleQuestionModal = needToShow => dispatch => {
  dispatch({
    type: TOGGLE_QUESTION_MODAL,
    payload: needToShow
  })
}

export default toggleQuestionModal
