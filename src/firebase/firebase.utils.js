import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCb-qcD_27d7pdtx-CWzXiuQF7ezBbfPZI",
  authDomain: "farouk-e.firebaseapp.com",
  projectId: "farouk-e",
  storageBucket: "farouk-e.appspot.com",
  messagingSenderId: "621076639474",
  appId: "1:621076639474:web:102f92cb0a89996a65ea6b",
  measurementId: "G-C8PCCK9LH1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
