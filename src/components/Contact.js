import classes from "./Contact.module.css";
import Mail from "../Images/mail.svg";
import Phone from "../Images/phone.svg";
import Github from "../Images/github.svg";
import Instagram from "../Images/instagram.svg";
import Linkedin from "../Images/linkedin.svg";
import { Fragment } from "react";
import Triangle from "../Images/triangle.svg";

const Contact = () => {
  return (
    <Fragment>
      <img src={Triangle} className={classes.triangle} alt="triangle" />
      <section className={classes.contactContainer}>
        <h2>Ways To Contact Me</h2>
        <p className={classes.contactCTA}>
          I`m looking forward to start a project with you!
        </p>
        <article className={classes.contactMethodsContainer}>
          <div className={classes.mailContainer}>
            <img src={Mail} alt="mail" className={classes.mailImg} />
            <p className={classes.mailText}>alexmaior@yahoo.com</p>
          </div>
          <div className={classes.phoneContainer}>
            <img src={Phone} alt="phone" className={classes.phoneImg} />
            <p className={classes.phoneText}>+40 755 903 907</p>
          </div>
        </article>
        <article className={classes.socialContainer}>
          <a
            href="https://www.linkedin.com/in/alexmaior/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/AlexMaior"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/alexmaior/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </article>
      </section>
    </Fragment>
  );
};

export default Contact;
