import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Project1 from "../../img/project1.png";
import Project from "../Project/Project";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>

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
          detail={"Detail..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project1}
          heading={"Desk booking System"}
          detail={"Detail..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project1}
          heading={"Learning well"}
          detail={"Detail..."}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
          className="project"
          img={Project1}
          heading={"Personal Website"}
          detail={"Detail..."}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
