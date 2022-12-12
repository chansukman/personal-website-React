import React from "react";
import "./Card.css";

const Card = ({heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
