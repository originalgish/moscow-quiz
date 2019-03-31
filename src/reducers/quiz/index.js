import { GET_POSITION } from '../../constants'

const initialState = {
  position: {}
}

const quiz = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSITION:
      return {
        ...state,
        position: payload
      }
    default:
      return state
  }
}

export default quiz
