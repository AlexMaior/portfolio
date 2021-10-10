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
import Footer from "./components/Footer";

function App() {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={classes.App}>
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

      <Navbar />
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
  );
}

export default App;
