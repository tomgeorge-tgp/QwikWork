import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import tool from "../assest/tool.png";
import { useAuth } from "../firebase/AuthContext";
import Forms from "../components/Forms";
import { Link, Redirect } from "react-router-dom";
import { appDB } from "../firebase";


  function App() {
  
  const { signupWorker, loggedIn } = useAuth();
  const [error, setError] = useState("");
  const {db, doc, setDoc} = appDB;

   if(loggedIn)
     return <Redirect to="/app/home" />

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Worker SignUp</h1>
          {error !== "" && <Alert variant="danger">{error}</Alert>}
          <Forms
            onSubmit={async (values, { _setSubmitting }) => {
              ///contain values from the sign up form
              console.log(values);
                if (check(values.password, values.confirmPassword)) {   //to check the password is matching
                  //e.preventDefault();
                  try {
                    setError("");
                    console.log(values);
                   const {user}=await signupWorker(values.email, values.password);        //to auth and create a userId
                    console.log(user);
                     try {
                       const userRef = doc(db, "users", user.uid);
                       const userInfo = {
                         firstName: values.firstName ,
                         lastName: values.lastName,
                         phoneNumber: values.phoneNo,
                         email: values.email,
                         category:"worker",
                       }
                       await setDoc(userRef, userInfo);
                       console.log("Registered Successfully!");
                     }
                      catch (err) {
                       console.log(err.message);
                     }
                  } catch(err) {
                    setError("Failed to create an account");
                    console.error(err);
                  }
                  
                }
                else 
                  {
                    console.log("Passwords Not Same!");
                    // setError(true);
                  }

        
            }}
          />
        </div>
        <div className="w-100 text-left mt-2 ">
          Already have an account? <Link to="/workerSignIn" className="text-decoration-none" >Log In</Link>
        </div>
        <div className="col-sm-7 d-flex justify-content-center align-items-center">
          <img className="img-fluid  w-50  " src={tool} alt="not found" />
        </div>
      </div>
    </div>
  );
}

function check(password, confirmPassword) {
  if (password === confirmPassword)
    return true;
  return false;
}

export default App;
