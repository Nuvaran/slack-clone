import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnPeqeyAGY3Rso9JeV7H18aqoB5DEbX30",
    authDomain: "slack-clone-51430.firebaseapp.com",
    projectId: "slack-clone-51430",
    storageBucket: "slack-clone-51430.appspot.com",
    messagingSenderId: "18201708431",
    appId: "1:18201708431:web:c2b39a69e741c2a2ee6dfa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;
