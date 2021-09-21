import React from "react";
import { ImArrowRight } from "react-icons/im";
import classes from "./App.module.css";
import Button from "./components/Button";
import { ParticlesComponent } from "./components/ParticlesComponent";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.titleDescription}>
        <p>Hello, I'm </p>
        <span>Alex Maior</span>
        <br />
        <p>a full-stack web developer</p>
        <br />
        <Button className={classes.btn}>
          VIEW MY WORK <ImArrowRight className={classes.arrow} />
        </Button>
      </div>
      <ParticlesComponent />
    </div>
  );
}

export default App;
