import React, { useContext } from "react";
import Logo from "../Images/Logo3.png";
import LogoLight from "../Images/Logo3Light.png";
import Github from "../Images/github.svg";
import Instagram from "../Images/instagram.svg";
import Linkedin from "../Images/linkedin.svg";
import GithubLight from "../Images/githubLight.svg";
import InstagramLight from "../Images/instagramLight.svg";
import LinkedinLight from "../Images/linkedinLight.svg";
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
                activeClass={darkTheme ? "activeDark" : "activeLight"}
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <img
                  src={darkTheme ? Logo : LogoLight}
                  alt="Logo"
                  className="logo"
                />
              </Link>
            </li>
            <li className="burger">
              <div
                className={`container ${isActive ? "" : "change"}`}
                onClick={ToggleChange}
              >
                <div
                  className={
                    darkTheme ? "bar1 barColorDark" : "bar1 barColorLight"
                  }
                ></div>
                <div
                  className={
                    darkTheme ? "bar2 barColorDark" : "bar2 barColorLight"
                  }
                ></div>
                <div
                  className={
                    darkTheme ? "bar3 barColorDark" : "bar3 barColorLight"
                  }
                ></div>
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
              <li
                className={
                  darkTheme
                    ? "navlistLi navlistLiDark"
                    : "navlistLi navlistLiLight"
                }
              >
                <Link
                  activeClass={darkTheme ? "activeDark" : "activeLight"}
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
              <li
                className={
                  darkTheme
                    ? "navlistLi navlistLiDark"
                    : "navlistLi navlistLiLight"
                }
              >
                <Link
                  activeClass={darkTheme ? "activeDark" : "activeLight"}
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
              <li
                className={
                  darkTheme
                    ? "navlistLi navlistLiDark"
                    : "navlistLi navlistLiLight"
                }
              >
                <Link
                  activeClass={darkTheme ? "activeDark" : "activeLight"}
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
              <li
                className={
                  darkTheme
                    ? "navlistLi navlistLiDark"
                    : "navlistLi navlistLiLight"
                }
              >
                <Link
                  activeClass={darkTheme ? "activeDark" : "activeLight"}
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
              <li
                className={
                  darkTheme ? "socialLi socialLiDark" : "socialLi socialLiLight"
                }
              >
                <a
                  href="https://www.linkedin.com/in/alexmaior/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={darkTheme ? Linkedin : LinkedinLight}
                    alt="Linkedin"
                    className="imgSocial"
                  />
                </a>
              </li>
              <li
                className={
                  darkTheme ? "socialLi socialLiDark" : "socialLi socialLiLight"
                }
              >
                <a
                  href="https://github.com/AlexMaior"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={darkTheme ? Github : GithubLight}
                    alt="Github"
                    className="imgSocial"
                  />
                </a>
              </li>
              <li
                className={
                  darkTheme ? "socialLi socialLiDark" : "socialLi socialLiLight"
                }
              >
                <a
                  href="https://www.instagram.com/alexmaior/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={darkTheme ? Instagram : InstagramLight}
                    alt="Instagram"
                    className="imgSocial"
                  />
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
