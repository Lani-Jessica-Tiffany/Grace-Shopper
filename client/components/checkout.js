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
  checkout(orderId) {
    this.props.dispatchCheckoutThunk(orderId)
  }

  render() {
    console.log(this.props, 'CHECKOUT')
    if (!this.props.cart || !this.props.cart.bobas) {
      return <h1>Nothing in your Cart</h1>
    }
    return <div />
    /* const {price, quantity, name, imageUrl} = this.props.cart.bobas

    console.log(name)
    let realPrice = String(price * quantity)
    realPrice =
      realPrice.slice(0, realPrice.length - 2) +
      '.' + realPrice.slice(realPrice.length - 2)


    return(
      <div>
        <div>
        <h3>Checkout Here:</h3>
        <h4>Review your order</h4>
        </div>
         {bobas && bobas.length
        ? bobas.map(boba =>(
          <div key={boba.id}>
          <h5>Name: {name}</h5>
          <img src={imageUrl} className="bobaImg" />
          <h5>Price: ${realPrice}</h5>
          <h5>Quantity: {quantity}</h5>
          </div>
        ))
        : <h1>Loading</h1>
        }
        <div>
        <button
        type= "button"
        onClick = {() => this.checkout(orderId)} >
        Place my Order
        </button>
        <p>{this.state.message}</p>
        </div>
      </div>
    ) */
  }
}

const mapStatetoProps = state => {
  console.log(state, 'STATE')
  return {
    cart: state.cart.cart
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    dispatchGetAllThunk: () => dispatch(getAllThunk()),
    dispatchCheckoutThunk: id => dispatch(checkoutThunk(id))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Checkout)
