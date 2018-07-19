import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import '../App.css'
import Navigation from './Navigation'
import BillsPage from './BillsPage'
import SignIn from './SignIn'
import SignUp from './SignUp'
import PasswordReset from './PasswordReset'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <hr/>
          <Route
            exact path="/"
            component={() => <BillsPage/>}
          />
          <Route
            exact path="/sign-in"
            component={() => <SignIn/>}
          />
          <Route
            exact path="/sign-up"
            component={() => <SignUp/>}
          />
          <Route
            exact path="/password-reset"
            component={() => <PasswordReset/>}
          />
        </div>
      </Router>
    );
  }
}

export default App
