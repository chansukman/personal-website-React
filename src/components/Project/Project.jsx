import React from "react";
import "./Project.css";

const Project =({darkMode,projectUrl,img,heading,detail})=>{

    return(
        <div className="project"> 
        <a href={projectUrl}>
        <img src={img}></img>
        </a>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{heading}</span>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{detail}</span>
      </div>
    )
}
export default Project;
