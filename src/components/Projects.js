import { Fragment } from "react";
import classes from "./Projects.module.css";
import SibiuGuide from "../Images/ssg.jpg";
import Sushi from "../Images/sushi.jpg";
import Recipe from "../Images/foodApp.jpg";

const Projects = () => {
  return (
    <section className={classes.projectsContainer}>
      <h2>Projects</h2>
      <article className={classes.projectsImagesContainer}>
        <div>
          <img src={SibiuGuide} alt="Sibiu City Guide" />
          <p>Sibiu City Guide</p>
        </div>
        <div>
          <img src={Sushi} alt="Sushi Restaurant" />
          <p>Sushi Restaurant</p>
        </div>
        <div>
          <img src={Recipe} alt="Recipe Website" />
          <p>Recipe Website</p>
        </div>
      </article>
    </section>
  );
};

export default Projects;
