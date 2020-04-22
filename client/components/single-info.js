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
    <h5>Price: ${price / 100}</h5>
  </div>
)

export const SingleCart = ({boba: {id, name, imageUrl, price, quantity}}) => (
  <div>
    <Link to={`/boba/${id}`}>{name}</Link>
    <img src={imageUrl} className="bobaImg" />
    <h5>Price: ${price / 100}</h5>
    <h5>Quantity: ${quantity}</h5>
  </div>
)
