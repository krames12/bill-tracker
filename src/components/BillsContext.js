import React, { Component } from 'react'
import dummyBillData from '../constants/dummyBillData'

const { Consumer, Provider } = React.createContext('bills')

class BillsProvider extends Component {
  state = {
    bills: dummyBillData
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
    console.log("Completing bill: ", bill.target.id)
  }

  render() {
    return (
      <Provider value={{
        bills: this.state.bills,
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