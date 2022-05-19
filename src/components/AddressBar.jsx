import React from "react";
// import { Navbar,Container,NavDropdown,Form,Button,Nav,FormControl } from 'react-bootstrap';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
// import "./Css/AddressBar.css";
import TextField from "./TextField";
function AddressBar(props) {

    const validate=Yup.object({
       
    
        locality:Yup.string()
        .max(15,'Must be 15 character or less')
        .required(' Required'),
        district:Yup.string()
        .max(15,'Must be 15 character or less')
        .required('Required'),
    
        state:Yup.string()
        .max(15,'Must be 15 character or more')
        .required(' Required'),
    
        
    })
    
        return(
            <Formik
            initialValues={{
                locality:'',
                district:'',
                state:'',
                
                
            }}
            {...props}
            validationSchema={validate}
            >
    
    
             {formik =>(
                <div className="h-15 " >
                
                {/* {console.log(formik.values)}  */}
                <Form className="d-flex justify-content-center ">      
                 <TextField label="Locality" name="locality" type="text"/>
                 <TextField label="District" name="district" type="text"/>
                 <TextField label="State" name="state" type="text"/>
                 
                 
                 <button className="btn btn-dark mt-3" type="submit">Search</button>
    
                </Form>
                </div>
                )
             }   
            </Formik>
        )
    
}
export default AddressBar;