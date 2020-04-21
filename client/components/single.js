// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getSingleThunk} from '../store/boba'
import SingleAgg from './single-agg'

// component
class Single extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.dispatchGetSingleThunk(id)
  }
  render() {
    return <SingleAgg {...this.props} />
  }
}

// connect
const mapStatetoProps = state => ({
  boba: state.boba.single
})

const mapDispatchtoProps = dispatch => ({
  dispatchGetSingleThunk: id => dispatch(getSingleThunk(id))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Single)
