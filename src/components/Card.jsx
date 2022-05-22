import React from "react";
import img from "../assest/tom.jpg";
import "./Css/Card.css"
function Card(props)
{
    return(<div className="card-box" >
        <div className="card">
        <div className="top">
        <div className="title">
        <h1 className="name">{props.firstName + " " + props.lastName}</h1>
          <h2 className="work">{props.work}</h2>
        </div>
          
          <img className="circle-img" src={img}  />
         
        </div>
        <div className="bottom">
         <div className="info">
          <p>{props.phoneNo}</p>
          <p>{props.emailId}</p>
          
         </div>
         <div className="rating">7/10</div>
        </div>
      </div>

        </div>)
}
export default Card