import React from 'react'
import {connect} from 'react-redux'
import {getAllThunk, checkoutThunk} from '../store/cart'
import CartItem from './cart-item'

export class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  checkout() {
    this.props.dispatchCheckoutThunk()
  }

  render() {
    if (
      !this.props.cart ||
      !this.props.cart.bobas ||
      !this.props.cart.bobas.length
    ) {
      return <h1 className="text-center">Nothing in your Cart</h1>
    }
    const {bobas} = this.props.cart
    let total = 0
    bobas.map(each => {
      total += each.price * each.quantity
    })
    total =
      String(total).slice(0, String(total).length - 2) +
      '.' +
      String(total).slice(String(total).length - 2)
    return (
      <div className="text-center">
        <div>
          <h3>Checkout Here:</h3>
          <h4>Review your order</h4>
        </div>
        <br />
        {bobas.map(boba => <CartItem {...boba} key={boba.id} update={false} />)}
        <br />
        <div>
          <h5>Grand Total: $ {total}</h5>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.checkout()}
          >
            Place my Order
          </button>
          <p>{this.state.message}</p>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    cart: state.cart.cart
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    dispatchGetAllThunk: () => dispatch(getAllThunk()),
    dispatchCheckoutThunk: () => dispatch(checkoutThunk())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout)
