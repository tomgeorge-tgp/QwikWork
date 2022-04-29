import React, { useContext, useState, useEffect } from "react"
import { appAuth } from "./index.js"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} = appAuth;

  function signupWorker(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function signupCustomer(email, password,phoneNumber) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function loginWorker(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }
  function loginCustomer(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loginWorker,
    loginCustomer,
    signupWorker,
    signupCustomer,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
