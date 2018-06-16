import React, { Component } from 'react'

class BillEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bill-item">
        <p className="bill-name">
          <input
            type="text"
            // value={this.props.name?this.props.name:''}
            placeholder="Name"
          />
        </p>
        <p className="bill-cost">
          $<input
            type="text"
            value={this.props.cost?this.props.cost.toFixed(2):'0.00'}
          />
        </p>
        <button onClick={ () => this.props.clickHandler() }>Save</button>
      </div>
    )
  }
}

export default BillEdit;