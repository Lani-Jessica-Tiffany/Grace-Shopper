// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk, removeOrderThunk, addQty, subtractQty} from '../store/cart'
// import CartAgg from './cart-agg'
import CartItem from './cart-item'

// component
class Cart extends Component {
  componentDidMount() {
    this.props.dispatchGetAllThunk()
  }
  render() {
    const {bobas} = this.props.bobas
    if (!bobas || !bobas.length) {
      return <h1>Loading</h1>
    }
    return (
      <div>
        {bobas.map(boba => (
          <CartItem
            {...boba}
            delete={this.props.dispatchRemoveOrderThunk}
            addQty={this.props.incrementQty}
            subtractQty={this.props.decrementQty}
            key={boba.id}
          />
        ))}
      </div>
    )
  }
}

// connect
const mapStatetoProps = state => {
  console.log('state.cart.all', state.cart.all)
  return {
    bobas: state.cart.all
  }
}

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk()),
  dispatchRemoveOrderThunk: id => dispatch(removeOrderThunk(id)),
  incrementQty: id => dispatch(addQty(id)),
  decrementQty: id => dispatch(subtractQty(id))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
