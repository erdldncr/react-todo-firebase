import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCedZ85HzB7hD6mWf9JbrgjUqXTUtuk85Q",
  authDomain: "to-do-app-2f670.firebaseapp.com",
  projectId: "to-do-app-2f670",
  storageBucket: "to-do-app-2f670.appspot.com",
  messagingSenderId: "509072008303",
  appId: "1:509072008303:web:d1048124c5d5bce790599a",
});

export const db=firebaseApp.firestore()