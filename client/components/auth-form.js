import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  console.log('auth-form', props)
  return (
    <div>
      {displayName === 'Sign Up' ? <h2>Sign Up</h2> : <h2>Log In</h2>}
      <form onSubmit={handleSubmit} name={name} className="ui form">
        {displayName === 'Sign Up' ? (
          <div className="field six wide">
            <label htmlFor="userName">Name</label>
            <input name="userName" type="text" />
          </div>
        ) : (
          <div />
        )}
        <br />
        <div className="field six wide">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <br />
        <div className="field six wide">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <br />
        <button className="ui button" type="submit">
          {displayName}
        </button>

        {error && error.response && <div> {error.response.data} </div>}
      </form>
      {/* <a href="/auth/google">{displayName} with Google</a> */}
    </div>
  )
}

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

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      if (formName === 'signup') {
        const userName = evt.target.userName.value
        dispatch(auth(email, password, formName, userName))
      } else {
        dispatch(auth(email, password, formName))
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
