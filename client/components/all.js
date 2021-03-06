// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/boba'
import AllAgg from './all-agg'

// component
class All extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
    const {bobas} = this.props
    return !bobas || !bobas.length ? (
      <h1>Loading</h1>
    ) : (
      <AllAgg {...this.props} />
    )
  }
}

// connect
const mapStatetoProps = state => ({
  bobas: state.boba.all
})

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk())
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(All)
