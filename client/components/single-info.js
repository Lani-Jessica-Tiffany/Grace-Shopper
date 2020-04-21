// import
import React from 'react'
import {Link} from 'react-router-dom'

// component
const SingleInfo = ({boba: {name, price, description, image}}) => (
  <div>
    {/* <Link to={`/campuses/${campus.id}`}>
        Campus: {campus.name}
      </Link> */}
    <h1>{name}</h1>
    <img src={image} />
    <h5>{description}</h5>
    <h5>{price}</h5>
  </div>
)

// export
export default SingleInfo
