// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/boba'
import SingleAgg from './single-agg'

// component
class All extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
    return <SingleAgg {...this.props} />
  }
}

// connect
const mapStatetoProps = state => ({
  boba: state.boba.all
})

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk())
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(All)
