
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth";
//import admin from 'firebase-admin';
import { initializeApp } from "firebase/app";
//import FirestoreFullTextSearch from 'firestore-full-text-search';
//import firebase from 'firebase/compat/app';
//import firebase from 'firebase/app';

//https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDoc ,doc, setDoc, Timestamp, collection, query, where, getDocs,updateDoc } from "firebase/firestore";
import {getStorage} from "firebase/storage";
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
// export const fullTextSearch = new FirestoreFullTextSearch(db.collection('index'));
// Set documents
// const postData: Post = {
//   title: "What's Firestore Full-Text Search?",
//   content:
//   'Firestore Full-Text Search provides a Firestore-specific full-text search function. It runs on Cloud Functions and has excellent performance.',
//   created: admin.firestore.FieldValue.serverTimestamp(),
// };

// const docRef = postsRef.collection('posts').doc('1');

// // WriteBatch is supported so that documents and search indexes can be stored atomically.
// const batch = db.batch();
// batch.set(docRef, postData);
// await fullTextSearch.set('en', docRef, {batch, data: postData});
// await batch.commit();

const storage = getStorage(app);

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
  updateDoc,
  getDocs,
  collection,
  query,
  where,
  //fullTextSearch,
  Timestamp
}

export default app;
export {appAuth,appDB,storage};








