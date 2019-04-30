import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyA-LMe4T2kOTuM98OOQ9rL4IoXEfulggCE',
  authDomain: 'bento-358f7.firebaseapp.com',
  databaseURL: 'https://bento-358f7.firebaseio.com',
  projectId: 'bento-358f7',
  storageBucket: 'bento-358f7.appspot.com',
  messagingSenderId: '288905688388'
}

firebase.initializeApp(config)
