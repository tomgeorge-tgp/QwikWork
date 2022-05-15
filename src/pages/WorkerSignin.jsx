import React, { useState } from "react";
import tool from "../assest/tool.png";
import Form from "../components/FormSignIn";
import { useAuth, onAuthStateChanged } from "../firebase/AuthContext";
import { Link, Redirect } from "react-router-dom";
import { appDB } from "../firebase";

function SignIn() {
  const { loginWorker, loggedIn } = useAuth();

  // const [error, setError] = useState("");
  // const history = useHistory();

  const { db, doc, getDoc } = appDB;

  const [userData, setUserData] = useState({});

  if (loggedIn) {
    return <Redirect to="/app" />;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold-display-4">Worker SignIn</h1>
          <Form
            onSubmit={async (values, { _setSubmitting }) => {
              const { user } = await loginWorker(values.email, values.password);

              try {
                const userRef = doc(db, "users", user.uid);
                const data = await getDoc(userRef);
                
                console.log(data._document.data.value.mapValue.fields);
                setUserData(data._document.data.value.mapValue.fields);
                console.log("dataaa");
                console.log(setUserData);
              } 
              catch (err) {
                console.log(err);
              }

              // setSubmitting(false);
            }}
          />
          <h6>
            <Link to="/workerSignUp">Sign Up</Link>
          </h6>
        </div>
        <div className="col-sm-7 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid  w-50  "
            style={{ JustifyContent: "Right" }}
            src={tool}
            alt="not found"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
