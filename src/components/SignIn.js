import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { SignUpLink } from './SignUp'

const SignInPage = () =>
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  "email": "",
  "password": "",
  "error": null,
}

class SignInForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    event.preventDefault()
    console.log("Email:", this.state.email, "Password:", this.state.password)
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === ''

    return(
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default SignInPage;