import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import quiz from './quiz'

const rootReducer = combineReducers({
  form: formReducer,
  user,
  quiz
})

export default rootReducer
