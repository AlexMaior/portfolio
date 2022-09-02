import Border from "../Images/Border.svg";
import BorderLight from "../Images/BorderLight.svg";
import Portrait from "../Images/PortretYellow1.png";
import PortraitLight from "../Images/PortretYellowLIGHT.jpg";
// import Portrait2 from "../Images/PortretYellow2x.png";
import classes from "./AboutMe.module.css";
import CV from "../Images/Maior_Ionut_Alexandru_CV.pdf";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../App";

const AboutMe = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <section className={classes.aboutMeContainer}>
      <article className={classes.imageContainer}>
        <div className={classes.aboutMeImageContainer}>
          <img
            src={darkTheme ? Border : BorderLight}
            alt="Border"
            className={classes.border}
          />
          <img
            src={darkTheme ? Portrait : PortraitLight}
            alt="Portrait"
            className={classes.overlap}
          />
        </div>
      </article>
      <article className={classes.textContainer}>
        <h2
          className={
            darkTheme
              ? `${classes.textContainerH2} ${classes.textContainerH2Dark}`
              : `${classes.textContainerH2} ${classes.textContainerH2Light}`
          }
        >
          About Me
        </h2>
        <p
          className={
            darkTheme
              ? `${classes.textContainerP} ${classes.textContainerPDark}`
              : `${classes.textContainerP} ${classes.textContainerPLight}`
          }
        >
          Hi! I'm Alex, a full-stack web developer with a passion for Front-end.
          I like to code and enjoy bringing ideas to life in the browser.
        </p>
        <p
          className={
            darkTheme
              ? `${classes.textContainerP} ${classes.textContainerPDark}`
              : `${classes.textContainerP} ${classes.textContainerPLight}`
          }
        >
          Languages I speak:{" "}
          <span
            className={
              darkTheme ? `${classes.colorDark}` : `${classes.colorLight}`
            }
          >
            HTML
          </span>
          ,&nbsp;
          <span
            className={
              darkTheme ? `${classes.colorDark}` : `${classes.colorLight}`
            }
          >
            CSS
          </span>
          ,&nbsp;
          <span
            className={
              darkTheme ? `${classes.colorDark}` : `${classes.colorLight}`
            }
          >
            Javascript
          </span>
          ,&nbsp;
          <span
            className={
              darkTheme ? `${classes.colorDark}` : `${classes.colorLight}`
            }
          >
            React
          </span>
        </p>
        <p
          className={
            darkTheme
              ? `${classes.textContainerP} ${classes.textContainerPDark}`
              : `${classes.textContainerP} ${classes.textContainerPLight}`
          }
        >
          Interested in working together?
          <span
            className={
              darkTheme
                ? `${classes.getInTouch} ${classes.getInTouchDark}`
                : `${classes.getInTouch} ${classes.getInTouchLight}`
            }
          >
            <Link
              activeClass="active"
              className="size"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Get in touch!
            </Link>
          </span>
        </p>
        <a
          href={CV}
          target="_blank"
          rel="noreferrer"
          className={
            darkTheme
              ? `${classes.btn} ${classes.btnDark}`
              : `${classes.btn} ${classes.btnLight}`
          }
        >
          MY RESUME
        </a>
      </article>
    </section>
  );
};

export default AboutMe;
