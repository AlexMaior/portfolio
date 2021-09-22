import { GiSpeedometer, GiAerodynamicHarpoon } from "react-icons/gi";
import { BiDevices } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <h2 className={classes.aboutTitle}>About</h2>
      <section className={classes.aboutSection}>
        <article>
          <GiSpeedometer className={(classes.spped, classes.size)} />
          <p>
            Having a fast site is essential for keeping visitors on your page
          </p>
        </article>
        <article>
          <BiDevices className={(classes.responsive, classes.size)} />
          <p>Layouts that look good and work on any device.</p>
        </article>
        <article>
          <GiAerodynamicHarpoon className={(classes.dynamic, classes.size)} />
          <p>
            Great layouts and websites that besides looking good also have great
            functionality.
          </p>
        </article>
        <article>
          <HiOutlineLightBulb className={(classes.intuitive, classes.size)} />
          <p>Professional looking websites, easy to use and intuitive UX/UI.</p>
        </article>
      </section>
    </>
  );
};

export default About;
