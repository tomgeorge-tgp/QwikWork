import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import WorkerHome from "./pages/WorkerHome";

  import { useAuth } from "./firebase/AuthContext";

  function WorkerTabs() {
    const { logout } = useAuth();
  return (
    <>
      <Route exact path="/app/worker/home/">
         <WorkerHome/>
         <button onClick={logout} type="button" className="btn btn-danger">Log Out</button> 
         </Route>
         <Redirect exact path="/app" to="/app/worker/home" />

     </>
      );
  }   
  export default WorkerTabs;


  
