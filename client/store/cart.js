// action type
const GET_ALL = 'GET_ALL'
const ADD_ORDER = 'ADD_ORDER'
const UPDATE_ORDER = 'UPDATE_ORDER'
const REMOVE_ORDER = 'REMOVE_ORDER'
const CHECKOUT = 'CHECKOUT'

// action creator
const getAll = cart => ({
  type: GET_ALL,
  cart
})

const addOrder = cart => ({
  type: ADD_ORDER,
  cart
})

const updateOrder = (order, quantity) => ({
  type: UPDATE_ORDER,
  order,
  quantity
})

const removeOrder = bobaId => ({
  type: REMOVE_ORDER,
  bobaId
})

const checkout = orderId => ({
  type: CHECKOUT,
  orderId
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

export const updateOrderThunk = (bobaId, quantity) => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.put('/api/cart', {bobaId, quantity})
    dispatch(updateOrder(data))
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
export const checkoutThunk = orderId => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.put('api/cart/checkout', orderId)
    dispatch(checkout(data))
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

    case UPDATE_ORDER:
      const newState = all.map(order => {
        if (order.id === action.id) {
          return {
            ...order,
            quantity: action.quantity
          }
        }
      })
      return {...state, cart: newState}

    case REMOVE_ORDER:
      return {
        ...state,
        cart: action.bobaId
        // cart: state.cart.bobas.filter(boba => boba.id !== action.bobaId)
      }
    case CHECKOUT:
      return {...state, cart: action.type}
    default:
      return state
  }
}

// export
export default cart
