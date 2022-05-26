import React from "react";
import img from "../assest/tom.jpg";
import "./Css/Card.css"
import {Link} from "react-router-dom";

function Card(props)
{
    return(<div className="card-box" >
    <Link to={props.workerUrl}>
        <div className="card">
        <div className="top">
        <div className="title">
        <h1 className="name">{props.firstName + " " + props.lastName}</h1>
          <h2 className="work">{props.proffession}</h2>
        </div>
          
          <img className="circle-img" src={img}  />
         
        </div>
        <div className="bottom">
         <div className="info">
          <p>{props.phoneNumber}</p>
          <p>{props.email}</p>
          
          
         </div>
         <div className="rating">7/10</div>
         {/* <p>locality</p> */}
        </div>
      </div>
</Link>
        </div>)
}
export default Card