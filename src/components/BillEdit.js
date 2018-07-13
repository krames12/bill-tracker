import React, { Component } from 'react'

class BillEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": '',
      "cost": '',
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = () => {
    this.props.clickHandler(this.state)
    this.setState({ "name": '', "cost": '' })
  }

  render() {
    const { name, cost } = this.state

    // Validates that name is filled out and that cost is a nubmer
    const canSubmit =
      name.length > 0 &&
      cost.length > 0 &&
      !isNaN(cost)

    return (
      <div className="bill-edit-container">
        <h3 className="form-title">Add New Bill</h3>
        <div className="bill-name edit-bill-name">
          <label
            htmlFor="name"
            className="form-label"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input name-input"
            value={this.state.name?this.state.name:''}
            onChange={this.handleChange}
          />
        </div>
        <div className="bill-cost edit-bill-cost">
          <label
            htmlFor="cost"
            className="form-label"
          >
            Amount
          </label>
          <input
            type="text"
            id="cost"
            className="form-input cost-input"
            value={this.state.cost?this.state.cost:''}
            onChange={this.handleChange}
          />
        </div>
        <button
          id="button-add-bill"
          onClick={this.handleSubmit}
          disabled={!canSubmit}
        >
          Add Bill
        </button>
      </div>
    )
  }
}

export default BillEdit;