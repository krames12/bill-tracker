import React, { Component } from 'react'

class BillEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "name": null,
      "cost": null
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div className="bill-item">
        <p className="bill-name">
          <input
            type="text"
            id="name"
            // value={this.state.name?this.state.name:''}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </p>
        <p className="bill-cost">
          $<input
            type="text"
            id="cost"
            // value={this.state.amount?this.state.amount.toFixed(2):'0.00'}
            onChange={this.handleChange}
          />
        </p>
        <button onClick={ () => this.props.clickHandler(this.state) }>Save</button>
      </div>
    )
  }
}

export default BillEdit;