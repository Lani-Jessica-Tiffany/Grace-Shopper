// import
import React from 'react'
import SingleInfo from './single-info'

// component
const AllAgg = ({bobas}) => (
  <div>
    {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
    {bobas.map(boba => <SingleInfo key={`boba${boba.id}`} boba={boba} />)}
  </div>
)

// export
export default AllAgg
