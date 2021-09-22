import { IoSpeedometerOutline } from "react-icons/io5";
import { BiDevices, BiCog } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.aboutSectionContainer}>
      <h2 className={classes.aboutTitle}>About</h2>
      <section className={classes.aboutSection}>
        <article>
          <IoSpeedometerOutline className={(classes.spped, classes.size)} />
          <p>
            Having a fast site is essential for keeping visitors on your page
          </p>
        </article>
        <article>
          <BiDevices className={(classes.responsive, classes.size)} />
          <p>Layouts that look good and work on any device.</p>
        </article>
        <article>
          <BiCog className={(classes.dynamic, classes.size)} />
          <p>Great layouts and websites that have great functionality.</p>
        </article>
        <article>
          <HiOutlineLightBulb className={(classes.intuitive, classes.size)} />
          <p>Professional looking websites, easy to use and intuitive UX/UI.</p>
        </article>
      </section>
    </div>
  );
};

export default About;
