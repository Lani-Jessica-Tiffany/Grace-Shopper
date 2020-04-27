// import
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThunk, updateOrderThunk, removeOrderThunk} from '../store/cart'
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
            update={this.props.dispatchUpdateOrderThunk}
            delete={this.props.dispatchRemoveOrderThunk}
            key={boba.id}
          />
        ))}
      </div>
    )
  }
}

// connect
const mapStatetoProps = state => {
  // console.log(state, 'STATE')
  return {
    bobas: state.cart.all
  }
}
/* const mapStatetoProps = state => ({
  bobas: state.cart.all
}) */

const mapDispatchtoProps = dispatch => ({
  dispatchGetAllThunk: () => dispatch(getAllThunk()),
  dispatchUpdateOrderThunk: (id, qty) => dispatch(updateOrderThunk(id, qty)),
  dispatchRemoveOrderThunk: id => dispatch(removeOrderThunk(id))
})

// export
export default connect(mapStatetoProps, mapDispatchtoProps)(Cart)
