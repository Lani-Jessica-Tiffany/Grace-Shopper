// import
import React from 'react'
import {UserFrontBasic} from './user-front-info'

// component
const UserFrontAgg = ({userFront}) => (
  <div>
    {userFront.map(user => (
      <UserFrontBasic key={`user${user.id}`} user={user} />
    ))}
  </div>
)

// export
export default UserFrontAgg
