// IMPORT INTEGRATIONS
import firebase from 'firebase/app'
import 'firebase/database'

// INIT FIREBASE
const firebase_init = firebase.initializeApp({
  apiKey: 'AIzaSyD3f4ZOetaZfeHZ9YAt8A5J0bGJlgvuXkc',
  authDomain: 'native-notes-2b16e.firebaseapp.com',
  databaseURL: 'https://native-notes-2b16e.firebaseio.com',
  projectId: 'native-notes-2b16e',
  storageBucket: 'native-notes-2b16e.appspot.com',
  messagingSenderId: '76639537272'
})

const database = firebase.database()

export { database, firebase_init }
