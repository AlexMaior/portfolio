import upArrow from "../Images/upArrow.svg";
import classes from "./Footer.module.css";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../constants.css";

const Footer = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <section
      className={
        darkTheme
          ? `${classes.footerContainer} ${classes.darkFooter}`
          : `${classes.footerContainer} ${classes.lightFooter}`
      }
    >
      <article>
        <Link
          activeClass={classes.active}
          className="home"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={upArrow} alt="Up Arrow" className={classes.arrowImg} />
        </Link>
      </article>

      <article className={classes.footerTextContainer}>
        <p className={classes.footerText}>Copyright 2021 ALEX MAIOR</p>
      </article>
    </section>
  );
};

export default Footer;
