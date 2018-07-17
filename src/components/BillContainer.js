import React, { Component } from 'react'
import Bill from './Bill'
import BillEdit from './BillEdit'
import { BillsConsumer } from './BillsContext'

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
        <BillsConsumer.Consumer>
          { ({ bills, actions }) =>
            bills && bills.length ?
            bills.map( (bill) => (
              <Bill
                key={bill.id}
                deleteHandler={actions.removeBill}
                completeHandler={actions.completeBill}
                {...bill}
              />
            ))
            :
            <p>You have no bills</p>
          }
        </BillsConsumer.Consumer>
      </div>
    )
  };
}

export default BillContainer;