import React from "react";
import classes from "./Projects.module.css";
import Romania from "../Images/romania.jpg";
import Sushi from "../Images/sushi.jpg";
import Recipe from "../Images/foodApp.jpg";
import Form from "./numberFact/Form";
import { ThemeContext } from "../App";
import "../constants.css";

const Projects = () => {
  const darkTheme = React.useContext(ThemeContext);
  return (
    <section
      className={
        darkTheme
          ? `${classes.projectsContainer} ${classes.darkProj}`
          : `${classes.projectsContainer} ${classes.lightProj}`
      }
    >
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
              className={
                darkTheme
                  ? `${classes.projectImage} ${classes.projectImageDark}`
                  : `${classes.projectImage} ${classes.projectImageLight}`
              }
            />
            <p>Visit Romania</p>
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
              className={
                darkTheme
                  ? `${classes.projectImage} ${classes.projectImageDark}`
                  : `${classes.projectImage} ${classes.projectImageLight}`
              }
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
              className={
                darkTheme
                  ? `${classes.projectImage} ${classes.projectImageDark}`
                  : `${classes.projectImage} ${classes.projectImageLight}`
              }
            />
            <p>Recipe Website</p>
          </a>
        </div>
      </article>
      <article
        className={
          darkTheme
            ? `${classes.divPlaceholder} ${classes.darkAPIProj} `
            : `${classes.divPlaceholder} ${classes.lightAPIProj}`
        }
      >
        <Form />
      </article>
      <br></br>
    </section>
  );
};

export default Projects;
