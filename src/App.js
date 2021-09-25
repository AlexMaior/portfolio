import React, { useRef } from "react";
import classes from "./App.module.css";
import Button from "./components/Button";
import { FaArrowRight } from "react-icons/fa";
import { ParticlesComponent } from "./components/ParticlesComponent";
import About from "./components/About";
import Navbar from "./components/Navbar";

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
      <div ref={myRef}></div>
      <Navbar />
      <section className={classes.contentSection}>
        <div id="about">
          <About />
        </div>
      </section>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div>aaaaa</div>
      <div id="projects">
        Projects
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </div>

      <div id="contact">
        contact
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </div>
    </div>
  );
}

export default App;
