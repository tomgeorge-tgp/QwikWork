import React from "react";
import {ErrorMessage,useField} from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextField({label,...props})
{
    const [field,meta]=useField(props);
    // console.log(meta)
    return(
        <div className="mb-2">
        <label htmlFor={field.name}>{label}</label>
        <input
          className={`form-control form-control-md shadow-non ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
           />
 
        <ErrorMessage name={field.name}/>

        </div>)
}

export default TextField;