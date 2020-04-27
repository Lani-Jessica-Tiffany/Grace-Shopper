import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  Main,
  All,
  Cart,
  Single,
  UserFront
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, admin} = this.props

    return (
      // Display all routes
      isLoggedIn ? (
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/boba" component={All} />
          <Route path="/boba/:id" component={Single} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={UserHome} />
          {/* Routes placed here are only available if user is admin */}
          {admin && <Route path="/users" component={UserFront} />}
          <Route path="/cart" component={Cart} />
          {/* Displays our Main component as a fallback */}
          <Route component={Main} />
        </Switch>
      ) : (
        // Display public routes
        <Switch>
          <Route exact path="/boba" component={All} />
          <Route path="/boba/:id" component={Single} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route component={Main} />
        </Switch>
      )
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    admin: state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
