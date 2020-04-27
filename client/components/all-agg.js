// import
import React from 'react'
import {SingleBasic} from './single-info'

// component
const AllAgg = ({bobas}) => (
  <div className="container">
    {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
    <div className="row justify-content-md-center">
      {bobas.map(boba => (
        <SingleBasic className="" key={`boba${boba.id}`} boba={boba} />
      ))}
    </div>
  </div>
)

// export
export default AllAgg
