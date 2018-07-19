import React, { Component } from 'react'
import {
  Link,
  withRouter,
} from 'react-router-dom'

import * as auth from '../controllers/AuthController'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  "email": "",
  "passwordOne": "",
  "passwordTwo": "",
  "error": null,
}

const SignUp = ({ history }) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    event.preventDefault();

    const {
      email,
      passwordOne,
    } = this.state

    const {
      history
    } = this.props

    console.log(this.state)
    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then( () => {
        this.setState({ ...INITIAL_STATE })
        history.push('/')
      })
      .catch( error => {
        this.setState(byPropKey("error", error))
      })
  }

  render() {
    const {
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to="/sign-up">Sign Up</Link>
  </p>

export default withRouter(SignUp)