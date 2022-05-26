import React from "react";
import { SidebarData } from "./SideBarData";
import "./Css/SideBar.css"
import {ErrorMessage,useField} from 'formik';

function Sidebar()
{
   
    return(
        <div className="sidebar">
        <ul className="sidebarList">

        {SidebarData.map((val,key)=>
        {
            return(<li
            className="row" 
            type="radio"
            id={window.location.pathname==val.link? "active":""}
            key={key}
            onClick={()=>{
                window.location.path=val.link;
            }}>
            <div id="icon">{val.icon}</div>{" "}
            <div id="title">{val.title}</div>
            </li>);
        })};

        <li>
        <form>
       <label className="text-white">
           Other
         <input type="text" name="name" />
       </label>
          <input type="submit" value="Search" />
         </form>
        
        </li>
        </ul>
       </div>
       
    );
}
export default Sidebar;