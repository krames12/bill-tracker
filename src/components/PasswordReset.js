import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  "email": "",
  "error": null,
}

const PasswordReset = () =>
  <div>
    <h1>Reset Password</h1>
    <PasswordResetForm />
  </div>

class PasswordResetForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    event.preventDefault()
    console.log("resetting password lol i'm just kidding i'm logging")
  }

  render() {
    const {
      email,
      error,
    } = this.state

    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <button disabled={isInvalid} type="submit">
          Reset Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export const PasswordResetLink = () =>
  <p>
    Forgot your password?
    {' '}
    <Link to="/password-reset">Reset Password</Link>
  </p>

export default PasswordReset