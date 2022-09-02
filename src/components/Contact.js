import classes from "./Contact.module.css";
import Mail from "../Images/mail.svg";
import Phone from "../Images/phone.svg";
import MailLight from "../Images/mailLight.svg";
import PhoneLight from "../Images/phoneLight.svg";
import Github from "../Images/github.svg";
import Instagram from "../Images/instagram.svg";
import Linkedin from "../Images/linkedin.svg";
import GithubLight from "../Images/githubLight.svg";
import InstagramLight from "../Images/instagramLight.svg";
import LinkedinLight from "../Images/linkedinLight.svg";
import { Fragment, useContext } from "react";
import Triangle from "../Images/triangle.svg";
import TriangleLight from "../Images/triangleLight.svg";
import { ThemeContext } from "../App";

const Contact = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <Fragment>
      <img
        src={darkTheme ? `${Triangle}` : `${TriangleLight}`}
        className={classes.triangle}
        alt="triangle"
      />
      <section className={classes.contactContainer}>
        <h2
          className={
            darkTheme
              ? `${classes.contactContainerTitle} ${classes.contactContainerTitleDark}`
              : `${classes.contactContainerTitle} ${classes.contactContainerTitleLight}`
          }
        >
          Ways To Contact Me
        </h2>
        <p
          className={
            darkTheme
              ? `${classes.contactCTA} ${classes.contactCTADark}`
              : `${classes.contactCTA} ${classes.contactCTALight}`
          }
        >
          I`m looking forward to start a project with you!
        </p>
        <article className={classes.contactMethodsContainer}>
          <div
            className={
              darkTheme
                ? `${classes.mailContainer} ${classes.darkContainer}`
                : `${classes.mailContainer} ${classes.lightContainer}`
            }
          >
            <img
              src={darkTheme ? Mail : MailLight}
              alt="mail"
              className={classes.mailImg}
            />
            <p
              className={
                darkTheme
                  ? `${classes.mailText} ${classes.mailTextDark}`
                  : `${classes.mailText} ${classes.mailTextLight}`
              }
            >
              alexmaior@yahoo.com
            </p>
          </div>
          <div
            className={
              darkTheme
                ? `${classes.phoneContainer} ${classes.darkContainer}`
                : `${classes.phoneContainer} ${classes.lightContainer}`
            }
          >
            <img
              src={darkTheme ? Phone : PhoneLight}
              alt="phone"
              className={classes.phoneImg}
            />
            <p
              className={
                darkTheme
                  ? `${classes.phoneText} ${classes.phoneTextDark}`
                  : `${classes.phoneText} ${classes.phoneTextLight}`
              }
            >
              +40 755 903 907
            </p>
          </div>
        </article>
        <article className={classes.socialContainer}>
          <a
            href="https://www.linkedin.com/in/alexmaior/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={darkTheme ? Linkedin : LinkedinLight} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/AlexMaior"
            target="_blank"
            rel="noreferrer"
          >
            <img src={darkTheme ? Github : GithubLight} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/alexmaior/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={darkTheme ? Instagram : InstagramLight} alt="Instagram" />
          </a>
        </article>
      </section>
    </Fragment>
  );
};

export default Contact;
