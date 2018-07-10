import React, { Component } from 'react'

class BillEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": '',
      "cost": 0
    }
  }

  validateInputs = event => {
    //
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = () => {
    let verify = this.validateInputs;
    // check verify status to add bill

    this.props.clickHandler(this.state)
    this.setState({ "name": '', "cost": 0 })
  }

  render() {
    return (
      <div className="bill-item">
        <p className="bill-name">
          <input
            type="text"
            id="name"
            value={this.state.name?this.state.name:''}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </p>
        <p className="bill-cost">
          $<input
            type="text"
            id="cost"
            value={this.state.cost?this.state.cost:''}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    )
  }
}

export default BillEdit;