import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";

  import { useAuth } from "./firebase/AuthContext";

  function AppTabs() {
    const { loggedIn,logout } = useAuth();
  if (!loggedIn) return <Redirect to="/workerSignIn" />;

  return (
    <>
      
      <Route exact path="/app/home">
         <p>home</p>
         <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
         {/* <Home/> */}
      </Route>
     </>
      );
  } 


  
export default AppTabs;