import React from "react";
import Logo from "../Images/Logo.svg";
import Github from "../Images/github.svg";
import Instagram from "../Images/instagram.svg";
import Linkedin from "../Images/linkedin.svg";
import classes from "./Navbar.module.css";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <section className={classes.navContent}>
        <article className={classes.article2}>
          <ul className={classes.article2}>
            <li>
              <Link
                activeClass={classes.active}
                className="about"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img src={Logo} alt="Logo" />
              </Link>
            </li>
          </ul>
        </article>
        <article className={classes.article2}>
          <ul className={classes.article2}>
            <li>
              <Link
                activeClass={classes.active}
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass={classes.active}
                className="about"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass={classes.active}
                className="projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass={classes.active}
                className="contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </article>
        <article className={classes.article2}>
          <ul className={classes.article2}>
            <li>
              <a
                href="https://www.linkedin.com/in/alexmaior/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlexMaior"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="Github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/alexmaior/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </nav>
  );
};

export default Navbar;
