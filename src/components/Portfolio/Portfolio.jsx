import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/project1.png";
import Project2 from "../../img/project2.png";
import Project3 from "../../img/project3.png";
import Project4 from "../../img/project4.png";
import Project5 from "../../img/project5.png";



import Project from "../Project/Project";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'#F1F1EE': ''}}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Project
          className="project"
          img={Project1}
          heading={"Map Life"}
          detail={"This is a live streaming platform combined with map. Tech: Spring boot, Maven, JPA, JavaScript, leadlet API, google map API and twilio API"}
          darkMode={darkMode}
          gitUrl={"https://github.com/chansukman/Maplife"}
          proUrl={"http://maplife.shuwenchen.online"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project2}
          heading={"Desk booking System"}
          detail={"This is a booking system with the lottery function. Tech: Spring boot, Gradle, JDBC, JavaScript, GmailAPI"}
          darkMode={darkMode}
          gitUrl={"https://github.com/chansukman/office-desk-booking-system"}
          proUrl={"http://bookingsystem.shuwenchen.online"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project3}
          heading={"Personal Website"}
          detail={"This is my personal portfolio. Tech: React"}
          darkMode={darkMode}
          gitUrl={"https://github.com/chansukman/personal-website-React"}
          proUrl={"https://www.shuwenchen.online"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project5}
          heading={"clone-chatGPT"}
          detail={"This is clone chatGPT. Tech: React, node.js, openAI"}
          darkMode={darkMode}
          gitUrl={"https://github.com/chansukman/react-chatgpt-clone"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project4}
          heading={"Learn Chinese well in 30 days"}
          detail={"This is a Wechat mini-program. "}
          darkMode={darkMode}
          gitUrl={"https://github.com/chansukman/Wechat-miniProgram"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
