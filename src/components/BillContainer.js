import React, { Component } from 'react'
import Bill from './Bill'
import BillEdit from './BillEdit'
import BillsConsumer from './BillsContext'

import dummyBillData from '../constants/dummyBillData'

class BillContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: dummyBillData
    }
  }

  addBill = (bill) => {
    let newBills = this.state.bills;
    newBills.push({
      'id': newBills.length + 1,
      'name': bill.name,
      'cost': bill.cost,
      'completed': false
    })

    this.setState({ bills: newBills })
  }

  removeBill = (billId) => {
    let newBills = this.state.bills.filter( bill => {
      return billId !== bill.id ? bill : false
    } )

    this.setState({ "bills": newBills })
  }

  render() {
    return(
      <div id='bills-container'>
        {
          this.state.bills && this.state.bills.length ?
          this.state.bills.map( (bill) => (
            <Bill
              key={bill.id}
              clickHandler={this.removeBill}
              {...bill}
            />
          ))
          :
          <p>You have no bills</p>
        }
      </div>
    )
  };
}

export default BillContainer;