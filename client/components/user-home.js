import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <img
        className="img-fluid mx-auto d-block"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e96d7f77-c9e2-4379-a80d-46823b673b3a/dc4020n-cbf1c88d-84a5-40be-b905-7a9e84ecebd6.png/v1/fill/w_1024,h_420,strp/___kisekae_food___boba_bubble_tea____by_sakuraroselily_dc4020n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIwIiwicGF0aCI6IlwvZlwvZTk2ZDdmNzctYzllMi00Mzc5LWE4MGQtNDY4MjNiNjczYjNhXC9kYzQwMjBuLWNiZjFjODhkLTg0YTUtNDBiZS1iOTA1LTdhOWU4NGVjZWJkNi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Kgmj6hkw1SWPZuRIc2kwjvWcmBHHnhtnptKLkkt-z1I"
      />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
