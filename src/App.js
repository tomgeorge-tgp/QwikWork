import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import WorkerSignIn from "./pages/WorkerSignin";
import CustomerSignIn from "./pages/CustomerSignIn";
import CustomerSignUp from "./pages/CustomerSignup";
import AppTabs from "./AppsTab";
import WorkerSignUp from "./pages/WorkerSignup";
import "./components/Css/App.css";
import WorkerTabs from "./WorkerTabs";
import CustomerTabs from "./CustomerTabs";
import workerIcon from "./assest/worker.png";
import { useAuthInit, AuthProvider } from "./firebase/AuthContext";

function App() {
  const auth = useAuthInit();
 
  if (auth.loading) return <h3>Loading...</h3>;
  return (
    <AuthProvider value={auth}>
      <BrowserRouter>
        <div className="wholeBody">
          <ul className="d-flex navBar">
            {/* <img src={workerIcon}/> */}
            <li className="p-2 ">
              <Link className="text" to="/workerSignIn">
                WORKER
              </Link>
            </li>{" "}
            {/*npm i @material-ui/core --legacy-peer-deps    npm i @material-ui/icons*/}
            <li className="p-2 ">
              <Link className="text" to="/customerSignIn">
                CUSTOMER
              </Link>
            </li>
            
          </ul>

          <Switch>
            <Route exact path="/workerSignUp" component={WorkerSignUp}></Route>
            <Route exact path="/workerSignIn" component={WorkerSignIn}></Route>

            <Route
              exact
              path="/customerSignIn"
              component={CustomerSignIn}
            ></Route>
            <Route
              exact
              path="/customerSignUp"
              component={CustomerSignUp}
            ></Route>

            <Route path="/app" component={AppTabs} />

            <Redirect path="/" to="/app" />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
