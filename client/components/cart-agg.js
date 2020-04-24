// import
import React from 'react'
import {SingleCart} from './single-info'

// component
const CartAgg = ({bobas}) => {
  return (
    <div>
      {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
      {bobas.map(boba => (
        <SingleCart key={`${boba.orderId && boba.bobaId}`} boba={boba} />
      ))}
    </div>
  )
}

// export
export default CartAgg
