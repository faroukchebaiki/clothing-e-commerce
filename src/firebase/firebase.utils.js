import { initializeApp } from "firebase/app";
import { getAuth , signInWithPopup ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb-qcD_27d7pdtx-CWzXiuQF7ezBbfPZI",
  authDomain: "farouk-e.firebaseapp.com",
  projectId: "farouk-e",
  storageBucket: "farouk-e.appspot.com",
  messagingSenderId: "621076639474",
  appId: "1:621076639474:web:102f92cb0a89996a65ea6b",
  measurementId: "G-C8PCCK9LH1"
};

const app = initializeApp(firebaseConfig);



export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;
