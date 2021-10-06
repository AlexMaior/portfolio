import React, { useRef } from "react";
import classes from "./App.module.css";
import Button from "./components/Button";
import { FaArrowRight } from "react-icons/fa";
import { ParticlesComponent } from "./components/ParticlesComponent";
import About from "./components/About";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.App}>
      <div id="home"></div>
      <section className={classes.titleDescription}>
        <p>
          Hello, I'm
          <span> Alex Maior</span>.
        </p>
        <br />
        <p>I'm a full-stack web developer.</p>
        <br />
        <Button className={classes.btn} onClick={executeScroll}>
          VIEW MY WORK
          <FaArrowRight className={classes.arrow} />
        </Button>
      </section>
      <ParticlesComponent />

      <Navbar />
      <section className={classes.contentSection}>
        <div id="about" ref={myRef}>
          <About />
          <AboutMe />
        </div>
      </section>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
    </div>
  );
}

export default App;
