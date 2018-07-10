// IMPORT INTEGRATIONS
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import { firebaseConfig as config } from '../../app.json'

console.log(config)

// INIT FIREBASE
const firebase_init = firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
})

const firebase_db = firebase.database()
const firebase_auth = firebase.auth()
const firebase_storage = firebase.storage()
console.ignoredYellowBox = ['Setting a timer']

export { firebase, firebase_db, firebase_auth, firebase_storage, firebase_init }
