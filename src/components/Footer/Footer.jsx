import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>chansukman279@gmail.com</span>
        <div className="f-icons">
          <a href="https://linkedin.com/in/shuwenchen279" target="_blank" rel="noreferrer">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/chansukman" target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
