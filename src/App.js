import React, { useState } from "react";
import classes from "./App.module.css";
import Button from "./components/Button";
import { ImArrowRight } from "react-icons/im";
import { IoSunnyOutline } from "react-icons/io5";
import { ParticlesComponent } from "./components/ParticlesComponent";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { GlobalStyles } from "./components/global";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className={classes.App}>
        <GlobalStyles />
        <div className={classes.titleDescription}>
          <Button onClick={toggleTheme} className={classes.btn}>
            <IoSunnyOutline />
          </Button>
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
    </ThemeProvider>
  );
}

export default App;
