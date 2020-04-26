// import
import {combineReducers} from 'redux'
import user from './user'
import boba from './boba'
import cart from './cart'
import userFront from './user-front'

// reducer
const reducer = combineReducers({
  user,
  boba,
  cart,
  userFront
})

// export
export default reducer
