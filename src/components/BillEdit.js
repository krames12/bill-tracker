import React, { Component } from 'react'

class BillEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": '',
      "cost": 0
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = () => {
    this.props.clickHandler(this.state)
    this.setState({ "name": '', "cost": 0 })
  }

  render() {
    const { name, cost } = this.state

    // Validates that name is filled out and that cost is a nubmer
    const canSubmit =
      name.length > 0 &&
      cost.length > 0 &&
      !isNaN(cost)

    return (
      <div className="bill-item">
        <p></p>
        <p className="bill-name">
          <input
            type="text"
            id="name"
            value={this.state.name?this.state.name:''}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </p>
        <div className="bill-cost">
          <p>$</p>
          <input
            type="text"
            id="cost"
            value={this.state.cost?this.state.cost:0}
            onChange={this.handleChange}
          />
        </div>
        <button
          onClick={this.handleSubmit}
          disabled={!canSubmit}
        >
          Save
        </button>
      </div>
    )
  }
}

export default BillEdit;