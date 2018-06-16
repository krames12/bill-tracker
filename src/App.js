import React, { Component } from 'react'
import './App.css'
import BillContainer from './BillContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bill Tracker (Come up with a better name please)</h1>
        </header>
        <BillContainer />
      </div>
    );
  }
}

export default App
