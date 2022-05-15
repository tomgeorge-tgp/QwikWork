
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";

import { initializeApp } from "firebase/app";

//https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDoc ,doc, setDoc, Timestamp, collection, query, where, getDocs } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVlT8Xasn1dioTimcTERYgBHIsiQ50jp0",
  authDomain: "auth-development-4cccd.firebaseapp.com",
  projectId: "auth-development-4cccd",
  storageBucket: "auth-development-4cccd.appspot.com",
  messagingSenderId: "261429843675",
  appId: "1:261429843675:web:2ec0e5a3bcd1594730defe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const appAuth = {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
}
const appDB = {
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  Timestamp
}

export default app
export {appAuth,appDB};