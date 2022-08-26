import Border from "../Images/Border.svg";
import Portrait from "../Images/PortretYellow1.png";
// import Portrait2 from "../Images/PortretYellow2x.png";
import classes from "./AboutMe.module.css";
import CV from "../Images/Maior_Ionut_Alexandru_CV.pdf";
import { Link } from "react-scroll";

const AboutMe = () => {
  return (
    <section className={classes.aboutMeContainer}>
      <article className={classes.imageContainer}>
        <div className={classes.aboutMeImageContainer}>
          <img src={Border} alt="Border" className={classes.border} />
          <img src={Portrait} alt="Portrait" className={classes.overlap} />
        </div>
      </article>
      <article className={classes.textContainer}>
        <h2>About Me</h2>
        <p>
          Hi! I'm Alex, a full-stack web developer with a passion for Front-end.
          I like to code and enjoy bringing ideas to life in the browser.
        </p>
        <p>
          Languages I speak: <span className={classes.color}>HTML</span>,&nbsp;
          <span className={classes.color}>CSS</span>,&nbsp;
          <span className={classes.color}>Javascript</span>,&nbsp;
          <span className={classes.color}>React</span>
        </p>
        <p>
          Interested in working together?
          <span className={classes.getInTouch}>
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
        <a href={CV} target="_blank" rel="noreferrer" className={classes.btn}>
          MY RESUME
        </a>
      </article>
    </section>
  );
};

export default AboutMe;
