import React from "react";
import classes from "./Projects.module.css";
import Romania from "../Images/romania.jpg";
import Sushi from "../Images/sushi.jpg";
import Recipe from "../Images/foodApp.jpg";
import Form from "./numberFact/Form";
import { ThemeContext } from "../App";
import "../constants.css";
import TempConverter from "./TempConverter";

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
      <h2
        className={
          darkTheme
            ? `${classes.projectsContainerH2} ${classes.projectsContainerH2Dark}`
            : `${classes.projectsContainerH2} ${classes.projectsContainerH2Light}`
        }
      >
        Projects
      </h2>
      <article className={classes.projectsImagesContainer}>
        <div>
          <a
            href="https://transcendent-madeleine-45f9be.netlify.app/"
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
            <p
              className={
                darkTheme
                  ? `${classes.projectName} ${classes.projectNameDark}`
                  : `${classes.projectName} ${classes.projectNameLight}`
              }
            >
              Visit Romania
            </p>
          </a>
        </div>
        <div>
          <a
            href="https://joyful-shortbread-d07fbb.netlify.app/"
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
            <p
              className={
                darkTheme
                  ? `${classes.projectName} ${classes.projectNameDark}`
                  : `${classes.projectName} ${classes.projectNameLight}`
              }
            >
              Sushi Restaurant
            </p>
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
            <p
              className={
                darkTheme
                  ? `${classes.projectName} ${classes.projectNameDark}`
                  : `${classes.projectName} ${classes.projectNameLight}`
              }
            >
              Recipe Website
            </p>
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
      {/* <article
        className={
          darkTheme
            ? `${classes.divPlaceholder2} ${classes.darkAPIProj} `
            : `${classes.divPlaceholder2} ${classes.lightAPIProj}`
        }
      >
        <TempConverter />
      </article> */}
      <br></br>
    </section>
  );
};

export default Projects;
