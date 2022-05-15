import React from "react";
import { Route, Redirect } from "react-router-dom";
import CustomerHome from "./pages/CustomerHomePg";

  import { useAuth } from "./firebase/AuthContext";

  function CustomersTabs() {
    const {logout} = useAuth();
  return (
    <>
      <Route exact path="/app/customer/home">
         <CustomerHome/>
         <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
      </Route>
      <Redirect exact path="/app" to="/app/customer/home" />
     </>
      );
  }  


  
export default CustomersTabs;