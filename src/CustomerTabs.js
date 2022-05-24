import React from "react";
import { Route, Redirect } from "react-router-dom";
import CustomerHome from "./pages/CustomerHomePg";
import WorkerCustomerViewPg from "./pages/WorkerCustomerViewPg";

  import { useAuth } from "./firebase/AuthContext";

  function CustomersTabs() {
    const {logout} = useAuth();
  return (
    <>
      <Route exact path="/app/customer/home">
         <CustomerHome/>
         

      </Route>
      <Route exact path="/app/customer/WorkerView/:id" component={WorkerCustomerViewPg}></Route>
      <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
      <Redirect exact path="/app" to="/app/customer/home" />
     </>
      );
  }  


  
export default CustomersTabs;