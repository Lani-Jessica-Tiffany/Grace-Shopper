import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, admin}) => (
  <div>
    <nav className="navbar navbar-expand-lg background">
      <Link className="navbar-brand bobasaur" to="/">
        BOBASAUR
      </Link>
      <Link className="link" to="/boba">
        Shop
      </Link>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          {/* only  if admin */}
          {admin && (
            <Link className="link" to="/users">
              Users
            </Link>
          )}
          <a className="link" href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
      <Link className="link" to="/cart">
        Cart
      </Link>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    admin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
