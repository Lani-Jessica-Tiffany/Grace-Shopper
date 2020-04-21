// import
import React from 'react'
import {SingleBasic, SingleDetail} from './single-info'

// component
const SingleAgg = ({boba}) => (
  <div>
    {/* aggregate all components for boba here (e.g. info, quantity, add-ons) */}
    <SingleBasic key={`sb${boba.id}`} boba={boba} />
    <SingleDetail key={`sd${boba.id}`} boba={boba} />
  </div>
)

// export
export default SingleAgg
