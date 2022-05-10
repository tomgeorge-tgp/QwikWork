import React from "react";
import tool from '../assest/tool.png'
import Form from "../components/FormSignIn";
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom';
import { appDB } from "../firebase";
function SignIn()
{
    
    
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Customer SignIn</h1>
                <Form/>
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