// action type
const GET_ALL = 'GET_ALL'
const ADD_ORDER = 'ADD_ORDER'
const UPDATE_ORDER = 'UPDATE_ORDER'
const REMOVE_ORDER = 'REMOVE_ORDER'

// action creator
const getAll = all => ({
  type: GET_ALL,
  all
})

const addOrder = order => ({
  type: ADD_ORDER,
  order
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

export const addOrderThunk = (orderId, bobaId) => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.post('/api/cart', {orderId, bobaId})
    dispatch(addOrder(data))
  } catch (err) {
    console.log(err)
  }
}

export const updateOrderThunk = (orderId, bobaId, quantity) => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.put('/api/cart', {orderId, bobaId, quantity})
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

// state
const initialState = {
  all: []
}

// reducer
const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...state, all: action.all}

    case ADD_ORDER:
      return {...state, all: [...state.all, action.all]}

    case UPDATE_ORDER:
      const newState = all.map(order => {
        if (order.id === action.id) {
          return {
            ...order,
            quantity: action.quantity
          }
        }
      })
      return {...state, all: newState}

    case REMOVE_ORDER:
      return {
        ...state,
        all: action.bobaId
        // all: state.all.bobas.filter(boba => boba.id !== action.bobaId)
      }
    default:
      return state
  }
}

// export
export default cart
