import React, { useContext, useState, useEffect } from "react"
import { appAuth } from "./"

const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext)
}

export function useAuthInit()
{
  const [authState, setAuthState] = useState(
    {
      loading: true,
      loggedIn: false,
      user: null,
      userData:null,
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

  useEffect(() => {
    return onAuthStateChanged(auth, user => {

      if(user)
        setAuthState({
          loading: false,
          loggedIn: true,
          user: user,
          
        })
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
    currentUser: authState.user,
    userData:authState.userData,
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
