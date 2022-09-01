import React, { useContext } from "react";
import Logo from "../Images/Logo3.png";
import Github from "../Images/github.svg";
import Instagram from "../Images/instagram.svg";
import Linkedin from "../Images/linkedin.svg";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../App";
import "../constants.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("false");
  const darkTheme = useContext(ThemeContext);

  console.log(darkTheme);
  const ToggleChange = (props) => {
    setIsActive(!isActive);
  };

  return (
    <nav className={darkTheme ? "nav navDark" : "nav navLight"}>
      <section className="navContent">
        <article className="navContainers">
          <ul className="logoAndBurger">
            <li>
              <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </li>
            <li className="burger">
              <div
                className={`container ${isActive ? "" : "change"}`}
                onClick={ToggleChange}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </li>
          </ul>
        </article>

        <div
          className={
            darkTheme
              ? `navDark navListContainers ${isActive ? "displ" : ""}`
              : `navLight navListContainers ${isActive ? "displ" : ""}`
          }
        >
          <article className="navContainers">
            <ul className="navList">
              <li>
                <Link
                  activeClass="active"
                  className="size"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={ToggleChange}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="size"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={ToggleChange}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="size"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={ToggleChange}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  className="size"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={ToggleChange}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </article>
          <article className="navContainers">
            <ul className="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/alexmaior/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Linkedin} alt="Linkedin" className="imgSocial" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AlexMaior"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Github} alt="Github" className="imgSocial" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alexmaior/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Instagram" className="imgSocial" />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
