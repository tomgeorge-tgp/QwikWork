import React from 'react';

import { Form, Button, Card, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import tool from "../assest/tool.png";
function Home()
{


    return(
        <div>
          
             <div className="col-sm-7 d-flex justify-content-center align-items-center" >
             <p>Home</p>
                <img  className="img-fluid  w-50  "  src={tool} alt="not found" />
                <button type="button" className="btn btn-danger">Log Out</button>
            </div>
            
        </div>
        )

}
export default  Home;