// action type
const GET_ALL = 'GET_ALL'
const ADD_ORDER = 'ADD_ORDER'
const REMOVE_ORDER = 'REMOVE_ORDER'
const ADD_QTY = 'ADD_QTY'
const SUBTRACT_QTY = 'SUBTRACT_QTY'

// action creator
const getAll = cart => ({
  type: GET_ALL,
  cart
})

const addOrder = cart => ({
  type: ADD_ORDER,
  cart
})

const removeOrder = bobaId => ({
  type: REMOVE_ORDER,
  bobaId
})

export const addQty = bobaId => ({
  type: ADD_QTY,
  bobaId
})

export const subtractQty = bobaId => ({
  type: SUBTRACT_QTY,
  bobaId
})

// thunk creator
export const getAllThunk = () => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.get('/api/cart')
    const action = getAll(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}

export const addOrderThunk = (bobaId, quantity) => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.post('/api/cart', {bobaId, quantity})
    dispatch(addOrder(data))
  } catch (err) {
    console.log(err)
  }
}

export const removeOrderThunk = bobaId => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.delete(`/api/cart/${bobaId}`)
    dispatch(removeOrder(data))
  } catch (err) {
    console.log(err)
  }
}

// state
const initialState = {
  cart: []
}

// reducer
const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      action.cart &&
        action.cart.bobas &&
        action.cart.bobas.map((each, i) => {
          if (each.orderBoba) {
            action.cart.bobas[i].quantity = each.orderBoba.quantity
          }
        })
      return {...state, cart: action.cart}

    case ADD_ORDER:
      return {...state, cart: action.cart}

    case REMOVE_ORDER:
      return {
        ...state,
        cart: action.bobaId
        // cart: state.cart.bobas.filter(boba => boba.id !== action.bobaId)
      }

    case ADD_QTY:
      const newState = state.all.bobas.map(boba => {
        if (boba.id === action.bobaId) {
          return {
            ...boba,
            orderBoba: {
              ...boba.orderBoba,
              quantity: Math.min(boba.orderBoba.quantity + 1, 10)
            }
          }
        }
        return boba
      })
      return {...state, all: {...state.all, bobas: newState}}

    case SUBTRACT_QTY:
      const newStateTwo = state.all.bobas.map(boba => {
        if (boba.id === action.bobaId) {
          return {
            ...boba,
            orderBoba: {
              ...boba.orderBoba,
              quantity: Math.max(boba.orderBoba.quantity - 1, 1)
            }
          }
        }
        return boba
      })
      return {...state, all: {...state.all, bobas: newStateTwo}}

    default:
      return state
  }
}

// export
export default cart
