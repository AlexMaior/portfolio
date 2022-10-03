import React, { useContext } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import classes from "./TempConverter.module.css";
import "../constants.css";
import Java1 from "../Images/JavaTemp1.png";
import Java2 from "../Images/JavaTemp2.png";
import Java3 from "../Images/JavaTemp3.png";
import Java4 from "../Images/JavaTemp4.png";
import Java5 from "../Images/JavaTemp5.png";
import Github from "../Images/github.svg";
import GithubLight from "../Images/githubLight.svg";
import { ThemeContext } from "styled-components";

const TempConverter = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div className={classes.tempConvContainer}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Java Temperature </h2>
        <h2 className={classes.title}>Converter</h2>{" "}
      </div>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${classes.swiper}`}
      >
        <SwiperSlide>
          <img
            src={Java1}
            className={classes.img}
            alt="Screenshot of program"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Java2}
            className={classes.img}
            alt="Screenshot of program"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Java3}
            className={classes.img}
            alt="Screenshot of program"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Java4}
            className={classes.img}
            alt="Screenshot of program"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Java5}
            className={classes.img}
            alt="Screenshot of program"
          />
        </SwiperSlide>
      </Swiper>
      <div className={classes.linkContainer}>
        <p>You can see the project source code on Github</p>
        <a
          href="https://github.com/AlexMaior/java-converter"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={darkTheme ? Github : GithubLight}
            alt="Github"
            className={classes.gitImg}
          />
        </a>
      </div>
    </div>
  );
};

export default TempConverter;
