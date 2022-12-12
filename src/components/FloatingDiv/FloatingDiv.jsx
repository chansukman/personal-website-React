import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
