import React  from "react";
import tool from '../assest/tool.png'
import Forms from '../components/FormSmall';
function CustomerSignUp()
{
    return(
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-5">
            <h1 className="my-4 font-weight-bold-display-4">Customer SignUp</h1>
                <Forms/>
            </div>
            <div className="col-sm-7 d-flex justify-content-center align-items-center" >
                <img  className="img-fluid  w-50  "  src={tool} alt="not found" />
            </div>
         </div>
        </div>
        );
}

export default CustomerSignUp;