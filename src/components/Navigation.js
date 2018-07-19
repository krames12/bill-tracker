import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default () =>
  <header>
    <h1>Bill Tracker</h1>
    <nav>
      <ul>
        <li><Link to='/' >Bills</Link></li>
        <li><Link to='/sign-in' >Sign In</Link></li>
        <li><Link to='/sign-out' >Sign Out</Link></li>
      </ul>
    </nav>
  </header>