// import
import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './index-reducer'
// import user from './user'

// const
const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    createLogger({collapsed: true})
  )
)
const store = createStore(reducer, middleware)

// export
export default store
export * from './user'
