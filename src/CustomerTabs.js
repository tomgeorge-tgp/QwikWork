import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CustomerHome from "./pages/CustomerHomePg";

  import { useAuth } from "./firebase/AuthContext";

  function CustomersTabs() {
    const { loggedIn,logout } = useAuth();
  if (!loggedIn) return <Redirect to="/customerSignIn" />;
   else{
    
       //<Redirect to="/app/" />;
    
   
  return (
    <>
      
      <Route exact path="/app/Customer">
         <CustomerHome/>
         <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
        
      </Route>
     </>
      );
  }  
  } 


  
export default CustomersTabs;