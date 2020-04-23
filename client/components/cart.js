// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk} from '../store/cart'
import CartAgg from './cart-agg'

// component
class Cart extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
    return <CartAgg {...this.props} />
  }
}

// connect
const mapStatetoProps = state => ({
  bobas: state.cart.all
})

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk())
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
