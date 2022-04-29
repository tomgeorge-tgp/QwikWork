
import { initializeApp } from "firebase/app";
import "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

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
export const auth = app.auth();

export default app
export {db,auth};