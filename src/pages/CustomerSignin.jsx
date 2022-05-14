import React, { useState } from "react";
import tool from '../assest/tool.png'
import Form from "../components/FormSignIn";
import { useAuth } from "../firebase/AuthContext";
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom';
import { appDB } from "../firebase";
function SignIn()
{
    const { loginCustomer, loggedIn } = useAuth();
    const { db, doc, getDoc } = appDB;

    const [userData, setUserData] = useState({});

     if (loggedIn) {
        return <Redirect to="/app/home/Customer" />;
      }
    
    
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Customer SignIn</h1>
                <Form
                    onSubmit={async (values, { _setSubmitting }) => {
                        const {user}=await loginCustomer(values.email, values.password); 
                        try {
                               const userRef = doc(db, "users", user.uid);
                               const data = await getDoc(userRef);
                                setUserData(data);
                           } 
              catch (err) {
                console.log(err);
              }
                    }
                    }
                />
                <Link to="/customerSignUp">
                <h6>Sign Up</h6>
                </Link>
                
            </div>
            <div className="col-sm-7 d-flex justify-content-center align-items-center">
                <img  className="img-fluid  w-50  " style={{ JustifyContent: "Right" }} src={tool} alt="not found" />
            </div>
         </div>
        </div>
         );
}

export default SignIn;