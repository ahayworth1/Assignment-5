import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA_8k9ItknEXlXYzoRhwaOHnY92MzYdAOg",
  authDomain: "quitter2-b5767.firebaseapp.com",
  projectId: "quitter2-b5767",
  storageBucket: "quitter2-b5767.appspot.com",
  messagingSenderId: "149060933522",
  appId: "1:149060933522:web:2094c612f552559e47d34b"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db 
