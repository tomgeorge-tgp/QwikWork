import React, { useContext, useState, useEffect } from "react"
import { appAuth } from "./"
import { appDB } from "../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthInit()
{
  const { db, doc, getDoc } = appDB;
  const [authState, setAuthState] = useState(
    {
      loading: true,
      loggedIn: false,
      user: null,
    }
  )
  const {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut} = appAuth;

  function signupWorker(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function signupCustomer(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function loginWorker(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function loginCustomer(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
   
  function logout() {
    return signOut(auth).then(() => {
      console.log("Logged out successfully");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect( () => {
    return onAuthStateChanged(auth, async (user) => {

      if(user){
        const userRef = doc(db, "users", user.uid);
         const userDoc = await getDoc(userRef);
         console.log("data:", userDoc.data());
         const fullUserData = {...user, data: userDoc.data()}
         console.dir(fullUserData)
         setAuthState({
          loading: false,
          loggedIn: true,
          user: fullUserData,
          
        })
      }
      else 
        setAuthState({
          loading: false,
          loggedIn: false,
          user: null
        });
    })
  }, [])

  return {
    loading: authState.loading,
    loggedIn: authState.loggedIn,
    user:authState.user,
    loginWorker,
    loginCustomer,
    signupWorker,
    signupCustomer,
    logout,
    
    // resetPassword,
    // updateEmail,
    // updatePassword
  }
}

export function AuthProvider({ children, value }) {

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
