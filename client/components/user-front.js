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
    if (this.props.admin) return <UserFrontAgg {...this.props} />
    return <h1>Not allowed</h1>
  }
}

// connect
const mapState = state => ({
  userFront: state.userFront.all,
  admin: state.user.isAdmin
})

const mapDispatch = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk())
})

// export
export default connect(mapState, mapDispatch)(UserFront)
