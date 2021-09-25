import classes from "./About.module.css";
import Fast from "../Images/fast.svg";
import Responsive from "../Images/devices.svg";
import Dynamic from "../Images/engineering.svg";
import Intuitive from "../Images/lamp.svg";
import Polygon from "../Images/Polygon.svg";

const About = () => {
  return (
    <div className={classes.aboutSectionContainer}>
      <section className={classes.aboutSection}>
        <article>
          <img src={Fast} className={classes.overlap} />
          <img src={Polygon} className={classes.aboutIcons} />

          <p>
            Having a fast site is essential for keeping visitors on your page
          </p>
        </article>
        <article>
          <img src={Responsive} className={classes.overlap} />
          <img src={Polygon} />
          <p>Layouts that look good and work on any device.</p>
        </article>
        <article>
          <img src={Dynamic} className={classes.overlap} />
          <img src={Polygon} />
          <p>Great layouts and websites that have great functionality.</p>
        </article>
        <article>
          <img src={Intuitive} className={classes.overlap} />
          <img src={Polygon} />
          <p>Professional looking websites, easy to use and intuitive UX/UI.</p>
        </article>
      </section>
    </div>
  );
};

export default About;
