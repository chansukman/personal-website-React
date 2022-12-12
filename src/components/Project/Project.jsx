import React from "react";

const Project =({img,heading,detail})=>{
    return(
        <div className="project"> 
        <img src={img}></img>
        <span>{heading}</span>
        <span>{detail}</span>
      </div>
    )
}
export default Project;
