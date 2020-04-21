// action type
const GET_ALL = 'GET_ALL'

// action creator
const getAll = all => ({
  type: GET_ALL,
  all
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

// state
const initialState = {
  all: []
}

// reducer
const boba = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...initialState, all: action.all}
    default:
      return state
  }
}

// export
export default boba
