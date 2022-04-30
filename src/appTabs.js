import React from "react";
import { Route, Redirect } from "react-router-dom";

import  Home from "./pages/Home";

  import { useAuth } from "./firebase/AuthContext";

  function AppTabs() {
    const { loggedIn } = useAuth();
  if (!loggedIn) return <Redirect to="/login" />;

  return (
    <>
      
      <Route exact path="/app/">
         <Home/>
      </Route>
     </>
      );
  } 


  
export default AppTabs;