// import
import React from 'react'
import {SingleBasic} from './single-info'

// component
const CartAgg = ({bobas}) => (
  <div>
    {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
    {bobas.map(boba => <SingleBasic key={`boba${boba.id}`} boba={boba} />)}
  </div>
)

// export
export default CartAgg
