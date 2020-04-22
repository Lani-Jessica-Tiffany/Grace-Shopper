// import
import {combineReducers} from 'redux'
import user from './user'
import boba from './boba'
import cart from './cart'

// reducer
const reducer = combineReducers({
  user,
  boba,
  cart
})

// export
export default reducer
