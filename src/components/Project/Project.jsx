import React from "react";
import "./Project.css";


const Project =({darkMode,img,heading,detail,proUrl,gitUrl})=>{
    return(
        <div className="project"> 
        <img src={img} alt=""></img>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{heading}</span>
        <span style={{color: darkMode?'#F1F1EE': ''}}>{detail}</span>
        <div className="project-linkbtn">
          <a href={gitUrl} target="_blank" rel="noreferrer"><button className="button project-button">Github</button></a>
            { proUrl ? <a href={proUrl} target="_blank" rel="noreferrer"><button className="button project-button">Website</button></a> : ''}
        </div>
      
      </div>
    )
}
export default Project;
