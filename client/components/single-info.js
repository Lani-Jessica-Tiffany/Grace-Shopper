// import
import React from 'react'
import {Link} from 'react-router-dom'
import {updateOrderThunk, removeOrderThunk} from '../store/cart'

// component
export const SingleBasic = ({boba: {id, name, imageUrl}}) => (
  <div className="text-center boba-margin">
    <Link to={`/boba/${id}`}>
      <img src={imageUrl} className="bobaImg rounded" />
      <p>{name}</p>
    </Link>
  </div>
)

export const SingleDetail = ({boba: {price, description}}) => {
  price = String(price)
  price = price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)
  return (
    <div className="text-center">
      <h5>
        <i>{description}</i>
      </h5>
      <h5>
        <b>Price:</b> ${price}
      </h5>
    </div>
  )
}

//reference but need to make stateful, so create stateful single cart item
export const SingleCart = ({
  boba: {bobaId, name, imageUrl, price, quantity}
}) => {
  price = String(price)
  price = price.slice(0, price.length - 2) + '.' + price.slice(price.length - 2)
  return (
    <div>
      <Link to={`/boba/${bobaId}`}>{name}</Link>
      <br />
      <img src={imageUrl} className="bobaImg rounded" />
      <h5>
        <b>Price:</b> ${price}
      </h5>
      <h5>
        <b>Quantity:</b> {quantity}
      </h5>
      {/* <button type="button" onClick={() => updateOrderThunk(bobaId)}>Update Quantity</button> */}
      <button type="button" onClick={() => removeOrderThunk(bobaId)}>
        Remove from Cart
      </button>
    </div>
  )
}
