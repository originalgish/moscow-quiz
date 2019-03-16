import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import game from './game'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  game
})

export default rootReducer
