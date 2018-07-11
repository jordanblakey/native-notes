import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'
// import 'firebase/storage'

import { firebaseConfig as c } from '../../config.json'

firebase.initializeApp({
  apiKey: c.apiKey,
  authDomain: c.authDomain,
  databaseURL: c.databaseURL,
  projectId: c.projectId,
  storageBucket: c.storageBucket,
  messagingSenderId: c.messagingSenderId
})

export default firebase
