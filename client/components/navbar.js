import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div
    className="ui orange active inverted secondary menu"
    style={{backgroundColor: '#FF8C00'}}
  >
    <div className="item">
      <Link className="item" to="/home">
        <h1 className="ui inverted header">okurrr</h1>
      </Link>
    </div>
    <div className="right menu">
      <nav>
        {isLoggedIn ? (
          <div className="item">
            {/* The navbar will show these links after you log in */}
            <Link className="item" to="/list">
              See all words
            </Link>
            <Link className="item" to="/home">
              Home
            </Link>
            <a className="item" href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className="item">
            {/* The navbar will show these links before you log in */}
            <Link className="item" to="/list">
              See all words
            </Link>
            <Link className="item" to="/login">
              Login
            </Link>
            <Link className="item ui" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
