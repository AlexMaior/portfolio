import upArrow from "../Images/upArrow.svg";
import classes from "./Footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className={classes.footerContainer}>
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
