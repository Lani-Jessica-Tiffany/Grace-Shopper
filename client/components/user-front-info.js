// import
import React from 'react'

// component
export const UserFrontBasic = ({user: {id, email, firstName, lastName}}) => (
  <div>
    <h5>{`User ID: ${id}`}</h5>
    <h5>{`Name: ${firstName} ${lastName}`}</h5>
    <h5>{`Email: ${email}`}</h5>
  </div>
)
