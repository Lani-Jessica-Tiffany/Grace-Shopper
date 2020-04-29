// import
import React from 'react'

// component
export const UserFrontBasic = ({user: {id, email, firstName, lastName}}) => (
  <div>
    <table>
      <tr>
        <td>{`User ID: ${id}`}</td>
      </tr>
      <tr>
        <td>{`Name: ${firstName} ${lastName}`}</td>
      </tr>
      <tr>
        <td>{`Email: ${email}`}</td>
      </tr>
    </table>
  </div>
)
