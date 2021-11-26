import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZluXaWWyq-FwReHnu9V1DjMw4feUnuB4",
  authDomain: "quitter2.firebaseapp.com",
  projectId: "quitter2",
  storageBucket: "quitter2.appspot.com",
  messagingSenderId: "909224982331",
  appId: "1:909224982331:web:e5412bc03a824303bca91e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
