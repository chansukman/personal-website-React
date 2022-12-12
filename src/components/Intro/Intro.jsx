import React, { useContext } from "react";
import "./Intro.css";
import girl from "../../img/girl.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "#F1F1EE" : "" }}>Hi! I am</span>
          <span>Shuwen Chen</span>
          <span>
          A graduate student in Software Engineering from Cardiff University. A big fans of coding.
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/chansukman">
          <img src={Github} />
          </a>
          <a href="https://linkedin.com/in/shuwenchen279">
          <img src={LinkedIn} />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={girl} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "55%" }}
          whileInView={{ left: "65%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv  text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "5rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv text1="Java" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
