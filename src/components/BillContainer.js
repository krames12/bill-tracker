import React, { Component } from 'react'
import Bill from './Bill'
import BillEdit from './BillEdit'

class BillContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'bills': [
        {
          'id': 1,
          'name': 'Rent',
          'cost': 800,
          'completed': true
        },
        {
          'id': 2,
          'name': 'Car',
          'cost': 200,
          'completed': false
        },
        {
          'id': 3,
          'name': 'Electric',
          'cost': 132,
          'completed': false
        }
      ]
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

  render() {
    return(
      <div id='bills-container'>
        {
          this.state.bills && this.state.bills.length ?
          this.state.bills.map( (bill) => (
            <Bill key={bill.id} {...bill} />
          ))
          :
          <p>You have no bills</p>
        }
        <BillEdit clickHandler={this.addBill} />
        <button id="button-add-bill">Add a bill</button>
      </div>
    )
  };
}

export default BillContainer;