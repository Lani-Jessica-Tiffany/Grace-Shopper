// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getAllThunk,
  removeOrderThunk,
  addQtyThunk,
  subtractQtyThunk
} from '../store/cart'
// import CartAgg from './cart-agg'
import CartItem from './cart-item'

// component
class Cart extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
    // console.log(this.props, 'BOBAS FROM CART')
    if (!this.props.cart || !this.props.cart.bobas) {
      return <h1>Add something to your cart!</h1>
    }
    const {bobas} = this.props.cart
    return (
      <div>
        {bobas.map(boba => (
          <CartItem
            {...boba}
            delete={this.props.dispatchRemoveOrderThunk}
            addQty={this.props.dispatchAddQtyThunk}
            subtractQty={this.props.dispatchSubtractQtyThunk}
            key={boba.id}
          />
        ))}
      </div>
    )
  }
}

// connect
const mapStatetoProps = state => {
  // console.log('state', state)
  return {
    cart: state.cart.cart
  }
}

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk()),
  dispatchRemoveOrderThunk: id => dispatch(removeOrderThunk(id)),
  dispatchAddQtyThunk: (id, quantity) => dispatch(addQtyThunk(id, quantity)),
  dispatchSubtractQtyThunk: (id, quantity) =>
    dispatch(subtractQtyThunk(id, quantity))
  // incrementQty: id => dispatch(addQty(id)),
  // decrementQty: id => dispatch(subtractQty(id))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
