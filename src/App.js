import React from 'react';
import {BrowserRouter,Link,Switch,Route,Redirect} from 'react-router-dom';
import WorkerSignIn from './pages/WorkerSignin';
import CustomerSignIn from './pages/CustomerSignin';
import CustomerSignUp from './pages/CustomerSignup';
import WorkerSignUp from './pages/WorkerSignup';
import workerIcon from "./assest/worker.png"
import {AuthProvider}from "./firebase/AuthContext";

function App()
{
    return(
        <AuthProvider>
        <BrowserRouter>
        <div>
            <ul className="d-flex">
            <img src={workerIcon} />
                <li className="p-2 " ><Link to="/workerSignIn">WORKER</Link></li>
                <li className="p-2 "><Link to="/customerSignIn">CUSTOMER</Link></li>
            </ul>
            <Switch>
            <Route exact path="/workerSignUp" component={WorkerSignUp}></Route>
            <Route exact path="/workerSignIn" component={WorkerSignIn}></Route>
            
            <Route exact path="/customerSignIn" component={CustomerSignIn}></Route>
            <Route exact path="/customerSignUp" component={CustomerSignUp}></Route>
            <Redirect path="/" to="/workerSignIn"/>
            
            </Switch>

        </div>
        </BrowserRouter>
        </AuthProvider>
        )
}

export default App;