import classes from "./About.module.css";
import Fast from "../Images/fast.svg";
import Responsive from "../Images/devices.svg";
import Dynamic from "../Images/engineering.svg";
import Intuitive from "../Images/lamp.svg";
import FastLight from "../Images/fastLight.svg";
import ResponsiveLight from "../Images/devicesLight.svg";
import DynamicLight from "../Images/engineeringLight.svg";
import IntuitiveLight from "../Images/lampLight.svg";
import Polygon from "../Images/Polygon.svg";
import PolygonLight from "../Images/PolygonLight.svg"; //Asta este merginea galbena
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../constants.css";

const About = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <div className={classes.aboutSectionContainer}>
      <section className={classes.aboutSection}>
        <article>
          <div className={classes.aboutIcons}>
            <img
              src={darkTheme ? Polygon : PolygonLight}
              alt="Polygon Shape"
              className={classes.poli}
            />
            <img
              src={darkTheme ? Fast : FastLight}
              alt="Fast"
              className={classes.overlap}
            />
          </div>
          <p
            className={
              darkTheme
                ? `${classes.color} ${classes.colorDark}`
                : `${classes.color} ${classes.colorLight}`
            }
          >
            Fast
          </p>
          <p
            className={
              darkTheme
                ? `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionDark}`
                : `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionLight}`
            }
          >
            A fast site is essential for keeping visitors on your page
          </p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img
              src={darkTheme ? Polygon : PolygonLight}
              alt="Polygon Shape"
              className={classes.poli}
            />
            <img
              src={darkTheme ? Responsive : ResponsiveLight}
              alt="Responsive"
              className={classes.overlap}
            />
          </div>
          <p
            className={
              darkTheme
                ? `${classes.color} ${classes.colorDark}`
                : `${classes.color} ${classes.colorLight}`
            }
          >
            Responsive
          </p>
          <p
            className={
              darkTheme
                ? `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionDark}`
                : `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionLight}`
            }
          >
            Layouts that look good and work on any device.
          </p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img
              src={darkTheme ? Polygon : PolygonLight}
              alt="Polygon Shape"
              className={classes.poli}
            />
            <img
              src={darkTheme ? Dynamic : DynamicLight}
              alt="Dynamic"
              className={classes.overlap}
            />
          </div>
          <p
            className={
              darkTheme
                ? `${classes.color} ${classes.colorDark}`
                : `${classes.color} ${classes.colorLight}`
            }
          >
            Dynamic
          </p>
          <p
            className={
              darkTheme
                ? `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionDark}`
                : `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionLight}`
            }
          >
            Great layouts and websites that have great functionality.
          </p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img
              src={darkTheme ? Polygon : PolygonLight}
              alt="Polygon Shape"
              className={classes.poli}
            />
            <img
              src={darkTheme ? Intuitive : IntuitiveLight}
              alt="Intuitive"
              className={classes.overlap}
            />
          </div>
          <p
            className={
              darkTheme
                ? `${classes.color} ${classes.colorDark}`
                : `${classes.color} ${classes.colorLight}`
            }
          >
            Intuitive
          </p>
          <p
            className={
              darkTheme
                ? `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionDark}`
                : `${classes.aboutWebsitesDescription} ${classes.aboutWebsitesDescriptionLight}`
            }
          >
            Professional websites, easy to use and intuitive UX/UI.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
