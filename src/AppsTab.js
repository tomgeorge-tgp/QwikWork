import React ,{ useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// // import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CustomerHome from "./pages/CustomerHomePg";
import WorkerHome from "./pages/WorkerHome";
import CustomersTabs from "./CustomerTabs";
import WorkerTabs from "./WorkerTabs";
 import { useAuth } from "./firebase/AuthContext";
import { appDB } from "./firebase";
 import { doc, getDoc} from "firebase/firestore"; 


  function AppsTabs() {
     
  const { loggedIn,user } = useAuth();
  console.log(user?.data)
  if (!loggedIn) return (<Redirect to="/workerSignIn" />);
  else if(user.data?.category==="customer") return (<CustomersTabs />)
  else if(user.data?.category==="worker") return (<WorkerTabs />)
  else return <></>

  } 


  
export default AppsTabs;