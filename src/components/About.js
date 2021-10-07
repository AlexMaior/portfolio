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
          <div className={classes.aboutIcons}>
            <img src={Polygon} alt="Polygon Shape" />
            <img src={Fast} alt="Fast" className={classes.overlap} />
          </div>
          <p className={classes.color}>Fast</p>
          <p>
            Having a fast site is essential for keeping visitors on your page
          </p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img src={Polygon} alt="Polygon Shape" />
            <img
              src={Responsive}
              alt="Responsive"
              className={classes.overlap}
            />
          </div>
          <p className={classes.color}>Responsive</p>
          <p>Layouts that look good and work on any device.</p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img src={Polygon} alt="Polygon Shape" />
            <img src={Dynamic} alt="Dynamic" className={classes.overlap} />
          </div>
          <p className={classes.color}>Dynamic</p>
          <p>Great layouts and websites that have great functionality.</p>
        </article>
        <article>
          <div className={classes.aboutIcons}>
            <img src={Polygon} alt="Polygon Shape" />
            <img src={Intuitive} alt="Intuitive" className={classes.overlap} />
          </div>
          <p className={classes.color}>Intuitive</p>
          <p>Professional looking websites, easy to use and intuitive UX/UI.</p>
        </article>
      </section>
    </div>
  );
};

export default About;
