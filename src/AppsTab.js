import React ,{ useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// // import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CustomerHome from "./pages/CustomerHomePg";
import WorkerHome from "./pages/WorkerHome";
 import { useAuth } from "./firebase/AuthContext";
import { appDB } from "./firebase";
 import { doc, getDoc} from "firebase/firestore"; 


  function AppsTabs() {
     var data;
    const { loggedIn,logout,userData } = useAuth();
    // let userCategory = userData.category;
    console.log("userData");
     console.log(userData);
    
    try{
   
    }
    catch (error)
    {

    }
  if (!loggedIn) return <Redirect to="/workerSignIn" />;

   else{
    // console.log("user");
    //  console.log(user);
    //  console.log("userID");
     
      if(loggedIn)
      {
          
        
        return (
            <>
              
              {/* <Route exact path="/app/home/worker"> */}
              <CustomerHome/>
              
              
                 <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
                
              {/* </Route> */}
             </>
              );
      }
    else 
    {
        return (
            <>
              
               <Route exact path="/app/home/Customer">
               <WorkerHome/>
              
                  <button onClick={logout} type="button" className="btn btn-danger">Log Out</button>
                
             </Route>
             </>
              );
    }
   
  
  }  
  } 


  
export default AppsTabs;