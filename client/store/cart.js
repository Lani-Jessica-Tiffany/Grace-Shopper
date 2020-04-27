// action type
const GET_ALL = 'GET_ALL'
const REMOVE_ORDER = 'REMOVE_ORDER'

// action creator
const getAll = all => ({
  type: GET_ALL,
  all
})

const removeOrder = order => ({
  type: REMOVE_ORDER,
  order
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

export const removeOrderThunk = orderId => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    const {data} = await axios.delete(`/api/cart/${orderId}`)
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
    case REMOVE_ORDER:
      return {
        ...state,
        all: state.all.bobas.filter(boba => boba.id !== action.order)
      }
    default:
      return state
  }
}

// export
export default cart
