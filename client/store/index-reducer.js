// import
import {combineReducers} from 'redux'
import user from './user'
import boba from './boba'

// reducer
const reducer = combineReducers({
  user,
  boba
})

// export
export default reducer
