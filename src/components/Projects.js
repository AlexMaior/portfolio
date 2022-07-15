import classes from "./Projects.module.css";
import Romania from "../Images/romania.jpg";
import Sushi from "../Images/sushi.jpg";
import Recipe from "../Images/foodApp.jpg";

const Projects = () => {
  return (
    <section className={classes.projectsContainer}>
      <h2>Projects</h2>
      <article className={classes.projectsImagesContainer}>
        <div>
          <a
            href="https://romania-turistica-b36ae.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Romania}
              alt="Romania Turistica"
              className={classes.projectImage}
            />
            <p>Romania Turistica</p>
          </a>
        </div>
        <div>
          <a
            href="https://sushi-website.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Sushi}
              alt="Sushi Restaurant"
              className={classes.projectImage}
            />
            <p>Sushi Restaurant</p>
          </a>
        </div>
        <div>
          <a
            href="https://myfoodrecipeapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Recipe}
              alt="Recipe Website"
              className={classes.projectImage}
            />
            <p>Recipe Website</p>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Projects;
