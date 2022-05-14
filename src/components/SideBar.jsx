import React from "react";
import { SidebarData } from "./SideBarData";
import "./Css/SideBar.css"

function Sidebar()
{
    return(
        <div className="sidebar">
        <ul className="sidebarList">
        {SidebarData.map((val,key)=>
        {
            return(<li
            className="row" 
            id={window.location.pathname==val.link? "active":""}
            key={key}
            onClick={()=>{
                window.location.path=val.link;
            }}>
            <div id="icon">{val.icon}</div>{" "}
            <div id="title">{val.title}</div>
            </li>);
        })}
        </ul>
           
        </div>
    );
}
export default Sidebar;