// IMPORT INTEGRATIONS
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

// INIT FIREBASE
const firebase_init = firebase.initializeApp({
  apiKey: 'AIzaSyD3f4ZOetaZfeHZ9YAt8A5J0bGJlgvuXkc',
  authDomain: 'native-notes-2b16e.firebaseapp.com',
  databaseURL: 'https://native-notes-2b16e.firebaseio.com',
  projectId: 'native-notes-2b16e',
  storageBucket: 'native-notes-2b16e.appspot.com',
  messagingSenderId: '76639537272'
})

const firebase_db = firebase.database()
const firebase_auth = firebase.auth()
const firebase_storage = firebase.storage()
console.ignoredYellowBox = ['Setting a timer']

export { firebase, firebase_db, firebase_auth, firebase_storage, firebase_init }
