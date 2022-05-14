import React from "react";
import img from "../assest/tom.jpg";
import "./Css/Card.css"
function Cards()
{
    return(<div className="card-box">
        <div className="card">
        <div className="top">
        <div className="title">
        <h1 className="name">{"TOM GEORGE"}</h1>
          <h2 className="work">{"Carpenter"}</h2>
        </div>
          
          <img className="circle-img" src={img}  />
         
        </div>
        <div className="bottom">
         <div className="info">
          <p>{"93734824657"}</p>
          <p>{"tom@1gmail.com"}</p>
          
         </div>
         <div className="rating">7/10</div>
        </div>
      </div>

        </div>)
}
export default Cards