// import
import React from 'react'
import {Link} from 'react-router-dom'
import {updateOrderThunk, removeOrderThunk} from '../store/cart'

// component
export const SingleBasic = ({boba: {id, name, imageUrl}}) => (
  <div className="text-center">
    <Link to={`/boba/${id}`}>{name}</Link>
    <br />
    <img src={imageUrl} className="bobaImg" />
  </div>
)

export const SingleDetail = ({boba: {price, description}}) => {
  price = String(price)
  price = price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)
  return (
    <div className="text-center">
      <h5>{description}</h5>
      <h5>Price: ${price}</h5>
    </div>
  )
}

export const SingleCart = ({
  boba: {bobaId, name, imageUrl, price, quantity}
}) => {
  price = String(price)
  price = price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)
  return (
    <div>
      <Link to={`/boba/${bobaId}`}>{name}</Link>
      <br />
      <img src={imageUrl} className="bobaImg" />
      <h5>Price: ${price}</h5>
      <h5>Quantity: {quantity}</h5>
      {/* <button type="button" onClick={() => updateOrderThunk(bobaId)}>Update Quantity</button> */}
      <button type="button" onClick={() => removeOrderThunk(bobaId)}>
        Remove from Cart
      </button>
    </div>
  )
}
