import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDWsguZCkOqifgPhf9VafJUFprl7URDT8",
    authDomain: "whatsapp-web-clone.firebaseapp.com",
    databaseURL: "https://whatsapp-web-clone.firebaseio.com",
    projectId: "whatsapp-web-clone",
    storageBucket: "whatsapp-web-clone.appspot.com",
    messagingSenderId: "374142454564",
    appId: "1:374142454564:web:c46e476b58b4a69c8d41b1",
    measurementId: "G-TJBFQJ45QD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;