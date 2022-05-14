import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import WorkerHome from "./pages/WorkerHome";

  import { useAuth } from "./firebase/AuthContext";

  function WorkerTabs() {
    const { loggedIn,logout } = useAuth();
  if (!loggedIn) return <Redirect to="/workerSignIn" />;
   else{
    
      //  <Redirect to="/app/Worker" />;
    console.log("hai");
   
  return (
    <>
      
      
         <WorkerHome/>
         <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
        
      
     </>
      );
  }  
  } 
  export default WorkerTabs;


  
