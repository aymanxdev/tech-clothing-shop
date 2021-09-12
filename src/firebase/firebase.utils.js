import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDHQPOBFdvHFY5wEVfW1vBrj_XRA5f9bZI",
  authDomain: "tech-clothing.firebaseapp.com",
  projectId: "tech-clothing",
  storageBucket: "tech-clothing.appspot.com",
  messagingSenderId: "271172428207",
  appId: "1:271172428207:web:c215b32187b02fed6e4f5a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
