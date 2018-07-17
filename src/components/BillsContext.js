import React, { Component } from 'react'

const { Consumer, Provider } = React.createContext('bills')

class BillsProvider extends Component {
  state = {
    bills: []
  }

  addBill = (bill) => {
    // Create
    console.log("Adding bill: ", bill)
  }

  removeBill = (bill) => {
    // Remove
    console.log("Removing bill: ", bill)
  }

  completeBill = (bill) => {
    // Update
    console.log("Completing bill: ", bill)
  }

  render() {
    return (
      <Provider value={{
        actions: {
          addBill: this.addBill,
          removeBill: this.removeBill,
          completeBill: this.completeBill,
        }
      }} >
        {this.props.children}
      </Provider>
    )
  }
}

export const BillsConsumer = Consumer
export default BillsProvider