// import
import React from 'react'
import {Link} from 'react-router-dom'

// component
export const SingleBasic = ({boba: {id, name, imageUrl}}) => (
  <div>
    <Link to={`/boba/${id}`}>{name}</Link>
    <br />
    <img src={imageUrl} className="bobaImg" />
  </div>
)

export const SingleDetail = ({boba: {price, description}}) => (
  <div>
    <h5>{description}</h5>
    <h5>Price: ${price}</h5>
  </div>
)
