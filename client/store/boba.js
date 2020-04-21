// action type
const GET_ALL = 'GET_ALL'
const GET_SINGLE = 'GET_SINGLE'

// action creator
const getAll = all => ({
  type: GET_ALL,
  all
})

const getSingle = single => ({
  type: GET_SINGLE,
  single
})

// thunk creator
export const getAllThunk = () => async (dispatch, getState, {axios}) => {
  try {
    // const { data } = await axios.get('/api/boba');
    const data = [
      {
        id: 1,
        name: 'oolong',
        price: 5,
        description: 'best boba ever',
        image: 'https://media.giphy.com/media/kBHfPMfonjJmM9fpfx/giphy.gif'
      },
      {
        id: 2,
        name: 'matcha',
        price: 10,
        description: 'best boba ever #2',
        image: 'https://media.giphy.com/media/58FqKxa9E7bIWG4epp/giphy.gif'
      }
    ]
    const action = getAll(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}

export const getSingleThunk = id => async (dispatch, getState, {axios}) => {
  try {
    // const { data } = await axios.get(`/api/boba/${id}`);
    const data = {
      id: 1,
      name: 'oolong',
      price: 5,
      description: 'best boba ever',
      image: 'https://media.giphy.com/media/kBHfPMfonjJmM9fpfx/giphy.gif'
    }
    const action = getSingle(data)
    dispatch(action)
  } catch (err) {
    console.log(err)
  }
}

// state
const initialState = {
  all: [],
  single: {}
}

// reducer
const boba = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...initialState, all: action.all}
    case GET_SINGLE:
      return {...initialState, single: action.single}
    default:
      return state
  }
}

// export
export default boba
