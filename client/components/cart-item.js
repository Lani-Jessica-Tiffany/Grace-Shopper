import React, {Component} from 'react'

export default class CartItem extends Component {
  constructor(props) {
    super(props)
    this.removeOrder = this.removeOrder.bind(this)
    this.incrementQty = this.incrementQty.bind(this)
    this.decrementQty = this.decrementQty.bind(this)
  }

  removeOrder(id) {
    this.props.delete(id)
  }

  incrementQty = (id, quantity) => {
    this.props.addQty(id, quantity)
  }

  decrementQty = (id, quantity) => {
    this.props.subtractQty(id, quantity)
  }

  render() {
    const {id, name, imageUrl, price} = this.props
    const {quantity} = this.props.orderBoba

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
          <button type="button" onClick={() => this.incrementQty(id, quantity)}>
            +
          </button>
          <button type="button" onClick={() => this.decrementQty(id, quantity)}>
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
