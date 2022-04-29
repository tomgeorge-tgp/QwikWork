import React from "react";
import {Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

function Forms(props)
{
const validate=Yup.object({
    firstName:Yup.string()
    .max(15,'Must be 15 character or less')
    .required('Required'),

    lastName:Yup.string()
    .max(20,'Must be 20 character or less')
    .required('Required'),

    email:Yup.string()
    .email(15,'Email is invalid')
    .required('Email is Required'),

    phoneNo:Yup.string()
    .max(10,'Phone No is invalid')
    .required('Phone No is Required'),

    password:Yup.string()
    .min(6,'Must be 6 character or more')
    .required('Password is Required'),

    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'),null],'Password must match')
    .required('Confirm password is Required'),
})

    return(
        <Formik
        initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            phoneNo:'',
            password:'',
            confirmPassword:''
        }}
    {...props}
        validationSchema={validate}
        >


         {formik =>(
            <div>
            
            {/* {console.log(formik.values)}  */}
            <Form>
            <TextField label="First Name" name="firstName" type="text"/>      
             <TextField label="Last Name" name="lastName" type="text"/>
             <TextField label="E-mail" name="email" type="email"/>
             <TextField label="Phone No" name="phoneNo" type="text"/>
             <TextField label="Password" name="password" type="password"/>
             <TextField label="Confirm Password" name="confirmPassword" type="password"/>
             <button className="btn btn-dark mt-3" type="submit">Register</button>

            </Form>
            </div>
            )
         }   
        </Formik>
    )
}
export default Forms