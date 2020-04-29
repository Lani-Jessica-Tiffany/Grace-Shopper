import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="text-center">
      <br />
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' && (
          <div className="ignore-css">
            <h3>User Registration</h3>
            <div className="row form-width mx-auto">
              <label className="col-sm-3" htmlFor="firstName">
                <small>First Name</small>
              </label>
              <input
                className="form-control col-sm-9"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="row form-width mx-auto">
              <label className="col-sm-3" htmlFor="lastName">
                <small>Last Name</small>
              </label>
              <input
                className="form-control col-sm-9"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
        )}
        <div className="row form-width mx-auto">
          <label className="col-sm-3" htmlFor="email">
            <small>Email</small>
          </label>
          <input
            className="form-control col-sm-9"
            name="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="row form-width mx-auto">
          <label className="col-sm-3" htmlFor="password">
            <small>Password</small>
          </label>
          <input
            className="form-control col-sm-9"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              {displayName}
            </button>
          </div>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt) {
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, firstName, lastName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
