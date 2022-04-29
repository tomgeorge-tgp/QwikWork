import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import tool from "../assest/tool.png";
import { useAuth } from "../firebase/AuthContext";
import Forms from "../components/Forms";
import { Link, useHistory } from "react-router-dom";
import { appDB } from "../firebase";


  function App() {
  
  const { signupWorker } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {db, doc, setDoc} = appDB;

   

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Worker SignUp</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Forms
            onSubmit={async (values, { setSubmitting }) => {
              ///contain values from the sign up form

                if (check(values.password, values.confirmPassword)) {   //to check the password is matching
                  //e.preventDefault();
                  try {
                    setError("");
                    setLoading(true);
                    console.log(values);
                   const {user}=await signupWorker(values.email, values.password);        //to auth and create a userId
                    console.log(user);
                     try {
                       const userRef = doc(db, "workers", user.uid);
                       const userInfo = {
                         name: values.firstName + values.lastName,
                         phoneNumber: values.phoneNo,
                         email: values.email,
                       }
                       await setDoc(userRef, userInfo);
                       console.log("Registered Successfully!");
                     }
                      catch (err) {
                       console.log(err.message);
                     }
                    history.push("/");
                  } catch(err) {
                    setError("Failed to create an account");
                    console.error(err);
                  }
                  
                  setLoading(false);
                }
                else 
                  {
                    console.log("Passwords Not Same!");
                    setError(true);
                    return;

                  }

                setSubmitting(true);
        
            }}
          />
        </div>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
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
