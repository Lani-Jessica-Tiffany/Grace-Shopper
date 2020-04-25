// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/user-front'
import UserFrontAgg from './user-front-agg'

// comopnent
class UserFront extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }

  render() {
    if (!this.props.userFront) return <h1>Loading</h1>
    return <UserFrontAgg {...this.props} />
  }
}

// connect
const mapState = state => ({
  userFront: state.userFront.all
})

const mapDispatch = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk())
})

// export
export default connect(mapState, mapDispatch)(UserFront)
