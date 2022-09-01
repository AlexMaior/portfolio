import React, { useEffect, useRef, useState } from "react";
import classes from "./App.module.css";
import Button from "./components/Button";
import { FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { ParticlesComponent } from "./components/ParticlesComponent";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGa from "react-ga";
import Sun from "./Images/sun.png";
import Moon from "./Images/moon.png";
import "./constants.css";

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  useEffect(() => {
    ReactGa.initialize("UA-146297874-1");
    ReactGa.pageview("/");
  }, []);
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <div
        className={
          darkTheme
            ? `${classes.App} ${classes.appDark}`
            : `${classes.App} ${classes.appLight}`
        }
      >
        <button onClick={toggleTheme} className={classes.btnTheme}>
          <img src={darkTheme ? `${Sun}` : `${Moon}`} alt="sun/moon" />
        </button>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Alex Maior Portfolio </title>
        </Helmet>
        <div id="home"></div>
        <section className={classes.titleDescription}>
          <p className={classes.appPara}>
            Hello, I'm
            <span className={classes.appParaSpan}> Alex Maior</span>.
          </p>
          <br />
          <p className={classes.appPara}>I'm a full-stack web developer.</p>
          <br />
          <Button className={classes.btn} onClick={executeScroll}>
            View my work
            <FaArrowRight className={classes.arrow} />
          </Button>
        </section>
        <ParticlesComponent />

        <Navbar toggleTheme={toggleTheme} />
        <section className={classes.contentSection}>
          <div id="about" ref={myRef}>
            <About />
            <AboutMe />
          </div>
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
