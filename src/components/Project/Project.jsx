import React from "react";
import "./Project.css";

const Project =({darkMode,img,heading,detail})=>{

    return(
        <div className="project"> 
        <img src={img}></img>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{heading}</span>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{detail}</span>
      </div>
    )
}
export default Project;
