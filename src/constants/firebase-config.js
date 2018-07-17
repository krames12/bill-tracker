import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCL1vRv4S-LDq9NrzuRF-NgLZlxTMG-2ko",
  authDomain: "bill-tracker-e3651.firebaseapp.com",
  databaseURL: "https://bill-tracker-e3651.firebaseio.com",
  projectId: "bill-tracker-e3651",
  storageBucket: "bill-tracker-e3651.appspot.com",
  messagingSenderId: "956117262488"
}

firebase.initializeApp(config);

export default firebase;