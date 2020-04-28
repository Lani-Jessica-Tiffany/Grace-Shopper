import React, {Component} from 'react'

export default class CartItem extends Component {
  constructor(props) {
    super(props)
    this.removeOrder = this.removeOrder.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  removeOrder(id) {
    this.props.delete(id)
  }

  updateQuantity = (id, quantity) => {
    this.props.update(id, quantity)
  }

  render() {
    let quantity
    const {id, name, imageUrl, price} = this.props
    if (this.props.quantity) {
      quantity = this.props.quantity
    } else {
      quantity = this.props.orderBoba.quantity
    }

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
        <h5>
          Quantity: {quantity}
          <button
            type="button"
            onClick={() => this.updateQuantity(id, quantity + 1)}
          >
            +
          </button>
          <button
            type="button"
            onClick={() => this.updateQuantity(id, quantity - 1)}
          >
            -
          </button>
        </h5>
        <button type="button" onClick={() => this.removeOrder(id, quantity)}>
          {' '}
          Remove From Cart
        </button>
      </div>
    )
  }
}
