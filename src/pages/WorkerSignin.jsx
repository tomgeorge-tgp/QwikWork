import React, { useState }from "react";
import tool from '../assest/tool.png'
import Form from '../components/FormSignIn';
import { useAuth } from "../firebase/AuthContext";
import {Link,Redirect}from 'react-router-dom';

function SignIn()
{ 
    const { loginWorker, loggedIn } = useAuth();
    // const [error, setError] = useState("");
    // const history = useHistory();
     if (loggedIn) {
        return <Redirect to="/app/home" />;
      }
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Worker SignIn</h1>
                <Form
                    onSubmit={async (values, { _setSubmitting }) => {
                        const {user}=await loginWorker(values.email, values.password); 
                            console.log(user);
                        // setSubmitting(false);
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