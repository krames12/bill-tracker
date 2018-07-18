import React, { Component } from 'react'
import firebase from '../constants/firebase-config'

const { Consumer, Provider } = React.createContext('bills')

class BillsProvider extends Component {
  constructor() {
    super()
    this.state = {
      bills: []
    }

    this.billsRef = firebase.database().ref('bills');
  }

  componentDidMount() {
    this.billsRef.on('value', (snapshot) => {
      let newBills = []
      snapshot.forEach( child => {
        let bill = child.val()
        newBills.push({
          'id': child.key,
          ...bill
        })
      })

      // snapshot.forEach( child => console.log(child.val().name))
      this.setState({bills: newBills})
    })

  }

  addBill = (bill) => {
    console.log("Adding bill: ", bill)
    this.billsRef.push({
      ...bill,
      "completed": false,
    })
      .then(() => console.log("Bill was successfully added"))
      .catch((error) => console.error("Firebase Error:", error) )
  }

  removeBill = (bill) => {
    this.billsRef.child(bill).remove()
      .then( () => console.log(`successfully deleted ${bill.id}`) )
      .catch( (error) => console.error("Firebase Error: ".error) )
  }

  completeBill = (bill) => {
    console.log("I GOT CLICKED");
    // Update
    this.billsRef.child(bill.id)
      .update({ 'completed': !bill.completed })
      .then( () => {
        console.log("i dun did the update")
        let newBillsList = this.state.bills.map( item => {
          if(item.id === bill.id) {
            return {
              'completed': !bill.completed,
              ...item,
            }
          } else {
            return item
          }
        } )

        console.log("newBillsList", newBillsList)

        this.setState({ bills: newBillsList })
      } )
      .catch( (error) => console.error("Firebase Error: ".error) )
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