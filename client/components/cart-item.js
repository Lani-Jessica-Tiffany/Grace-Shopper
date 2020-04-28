import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {removeOrderThunk} from '../store/cart'
//add to update item quantity, remove item

export default class CartItem extends Component {
  constructor(props) {
    super(props)
    this.updateOrder = this.updateOrder.bind(this)
    this.removeOrder = this.removeOrder.bind(this)
  }

  updateOrder(id, qty) {
    this.props.update(id, qty)
  }

  removeOrder(id) {
    this.props.delete(id)
  }
  render() {
    const {id, name, imageUrl, price, quantity} = this.props

    let realPrice = String(price * quantity)
    realPrice =
      realPrice.slice(0, realPrice.length - 2) +
      '.' +
      realPrice.slice(realPrice.length - 2)
    return (
      <div>
        <img src={imageUrl} className="bobaImg" />
        <h5>Name: {name} </h5>
        <h5>Price: ${realPrice}</h5>
        <h5>Quantity: {quantity}</h5>
        <button type="button" onClick={() => this.removeOrder(id)}>
          {' '}
          Remove From Cart
        </button>
      </div>
    )
  }
}

// const mapDispatchtoProps = dispatch => ({
//   dispatchRemoveOrderThunk: id => dispatch(removeOrderThunk(id))
// })

// export default connect(null, mapDispatchtoProps)(CartItem)
