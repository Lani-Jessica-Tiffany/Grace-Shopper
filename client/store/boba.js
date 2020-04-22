// action type
const GET_ALL = 'GET_ALL'
const GET_SINGLE = 'GET_SINGLE'
const UPDATE = 'UPDATE'

// action creator
const getAll = all => ({
  type: GET_ALL,
  all
})

const getSingle = single => ({
  type: GET_SINGLE,
  single
})

const update = quantity => ({
  type: UPDATE,
  quantity
})

// thunk creator
export const getAllThunk = () => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.get('/api/boba')
    const action = getAll(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}

export const getSingleThunk = id => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.get(`/api/boba/${id}`)
    const action = getSingle(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}
export const updateThunk = (id, quantity) => async (
  dispatch,
  getState,
  {axios}
) => {
  try {
    //  const {data} = await axios.put(`/api/campuses/${campusId}`, input)
    const data = {
      id: 1,
      name: 'oolong',
      price: 5,
      description: 'best boba ever',
      image: 'https://media.giphy.com/media/kBHfPMfonjJmM9fpfx/giphy.gif',
      // new field
      quantity: 0
    }
    const action = update(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}

// state
const initialState = {
  all: [],
  single: {},
  update: 0
}

// reducer
const boba = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...state, all: action.all}
    case GET_SINGLE:
      return {...state, single: action.single}
    case UPDATE:
      return {...state, update: action.quantity}
    default:
      return state
  }
}

// export
export default boba
