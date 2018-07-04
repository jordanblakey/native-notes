const firebase = require('firebase')

const config = {
  // apiKey: "apiKey",
  // authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://native-notes-2b16e.firebaseio.com",
  // storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  title: 'Hello World',
  author: 'Jordan'
})