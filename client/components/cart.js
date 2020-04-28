// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllThunk, updateOrderThunk, removeOrderThunk, updateQtyThunk} from '../store/cart'
import CartItem from './cart-item'

// component
class Cart extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
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
            update={this.props.dispatchUpdateQtyThunk}
            key={boba.id}
          />
        ))}
      </div>
    )
  }
}

// connect
const mapStatetoProps = state => {
  return {
    cart: state.cart.cart
  }
}

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk()),
  dispatchRemoveOrderThunk: id => dispatch(removeOrderThunk(id)),
  dispatchUpdateQtyThunk: (id, qty) => dispatch(updateQtyThunk(id, qty))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
