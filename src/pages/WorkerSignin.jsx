import React, { useRef, useState }from "react";
import tool from '../assest/tool.png'
import SignUp from './WorkerSignup';
import Form from '../components/FormSignIn';
import { useAuth } from "../firebase/AuthContext";
import {BrowserRouter,Link,Switch,Route,Redirect,useHistory} from 'react-router-dom';
function SignIn()
{ 
    const { loginCustomer } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
     // const {db, doc, getDoc } = appDB;
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Worker SignIn</h1>
                <Form
                    onSubmit={async (values, { setSubmitting }) => {
                        const {user}=await loginCustomer(values.email, values.password); 
                        console.log(user);
                         if (user)
                         {
                             history.push("/app/home")
                         }

                    } 
                    } 
                />
                <h6><Link to="/workerSignUp">Sign Up</Link></h6>
            </div>
            <div className="col-sm-7 d-flex justify-content-center align-items-center">
                <img  className="img-fluid  w-50  " style={{ JustifyContent: "Right" }} src={tool} alt="not found" />
            </div>
         </div>
        </div>
        );
}

export default SignIn;