import Border from "../Images/Border.svg";
import Portrait from "../Images/PortretYellow1.png";
// import Portrait2 from "../Images/PortretYellow2x.png";
import classes from "./AboutMe.module.css";
import CV from "../Images/Maior_Ionut_Alexandru_CV.pdf";

const AboutMe = () => {
  return (
    <>
      <section className={classes.aboutMeContainer}>
        <article className={classes.imageContainer}>
          <div className={classes.aboutMeImageContainer}>
            <img src={Border} alt="Border" className={classes.border} />
            <img src={Portrait} alt="Portrait" className={classes.overlap} />
          </div>
        </article>
        <article className={classes.textContainer}>
          <h2>
            <span className={classes.underline}>Abo</span>ut Me
          </h2>
          <p>
            We are Elven. Our candles are inspired by magic, myths, nature and
            memories. We hand-pour our candles in our LA studio using
            sustainable soy wax and phthalate-free perfume oils infused with
            essential oils. We pride ourselves on our meticulous craftsmanship,
            ethical production, and accessible prices.
          </p>
          <br />
          <p>
            We are Elven. Our candles are inspired by magic, myths, nature and
            memories. We hand-pour our candles in our LA studio using
            sustainable soy wax.
          </p>
          <br />

          <a href={CV} target="_blank" rel="noreferrer" className={classes.btn}>
            DOWNLOAD CV
          </a>
        </article>
      </section>
    </>
  );
};

export default AboutMe;
