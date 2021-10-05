import { Fragment } from "react";
import classes from "./Projects.module.css";
import SibiuGuide from "../Images/ssg.jpg";
import Sushi from "../Images/sushi.jpg";
import Recipe from "../Images/foodApp.jpg";

const Projects = () => {
  return (
    <Fragment>
      <section className={classes.projectsContainer}>
        <h2>Projects</h2>
        <article className={classes.projectsImagesContainer}>
          <div>
            <img src={SibiuGuide} />
          </div>
          <div>
            <img src={Sushi} />
          </div>
          <div>
            <img src={Recipe} />
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default Projects;
