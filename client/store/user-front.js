// action type
const GET_ALL = 'GET_ALL'

// action creator
const getAll = users => ({type: GET_ALL, users})

// thunk creator
export const getAllThunk = () => async (dispatch, getState, {axios}) => {
  try {
    const {data} = await axios.get('/api/users')
    const users = getAll(data)
    dispatch(users)
  } catch (err) {
    console.log(err)
  }
}

// state
const initialState = {
  all: []
}

// reducer
const userFront = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {...state, all: action.all}
    default:
      return state
  }
}

// export
export default userFront
