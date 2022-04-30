import React from "react";
import {Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

function Forms(props)
{
const validate=Yup.object({
   

    email:Yup.string()
    .email(15,'Email is invalid')
    .required('Email is Required'),

    password:Yup.string()
    .min(6,'Must be 6 character or more')
    .required('Password is Required'),

    
})

    return(
        <Formik
        initialValues={{
            email:'',
            password:'',
            
        }}
        {...props}
        validationSchema={validate}
        >


         {formik =>(
            <div>
            
            {/* {console.log(formik.values)}  */}
            <Form>      
             <TextField label="E-mail" name="email" type="email"/>
             <TextField label="Password" name="password" type="password"/>
             
             <button className="btn btn-dark mt-3" type="submit">Sign In</button>

            </Form>
            </div>
            )
         }   
        </Formik>
    )
}
export default Forms