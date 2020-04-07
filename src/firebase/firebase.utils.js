import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAD9pQv9Pqv1csm-RqIu1fGC4IhGX0akzw",
    authDomain: "crwn-db-f64b8.firebaseapp.com",
    databaseURL: "https://crwn-db-f64b8.firebaseio.com",
    projectId: "crwn-db-f64b8",
    storageBucket: "crwn-db-f64b8.appspot.com",
    messagingSenderId: "275993089418",
    appId: "1:275993089418:web:7bbc5f25bd3a93c6b96473",
    measurementId: "G-FTBGFR69G8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
