// import
import React from 'react'
import {Link} from 'react-router-dom'

// component
const CartAgg = ({bobas}) => {
  console.log(bobas, 'CARTAGG BOBAS')
  if (!bobas.bobas || !bobas.bobas.length) {
    return <h1>Loading</h1>
  }
  return (
    <div>
      <h1>HI</h1>
      {bobas.bobas.map(boba => (
        <div key={boba.id}>
          <img src={boba.imageUrl} className="bobaImg rounded" />
          <h5>Price: ${boba.price}</h5>
          <h5>Quantity: {boba.quantity}</h5>
        </div>
      ))}
    </div>
  )
}

// export
export default CartAgg
