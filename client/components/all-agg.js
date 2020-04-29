// import
import React from 'react'
import {SingleBasic} from './single-info'

// component
const AllAgg = ({bobas}) => (
  <div className="container mx-auto">
    {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
    <div className="row">
      {bobas.map(boba => (
        <SingleBasic className="" key={`boba${boba.id}`} boba={boba} />
      ))}
    </div>
  </div>
)

// export
export default AllAgg
