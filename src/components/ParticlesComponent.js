import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Particles from "react-particles";
import classes from "./ParticlesComponent.module.css";
export const ParticlesComponent = () => {
  const darkTheme = useContext(ThemeContext);

  return (
    <Particles
      className={
        darkTheme
          ? `${classes.particles} ${classes.particlesDark}`
          : `${classes.particles} ${classes.particlesLight}`
      }
      params={{
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: darkTheme ? "#fff" : "#000",
          },

          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "top",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
              // Aici am adaugat Paralaxul
              // parallax: {
              //   enable: true,
              //   force: 60,
              //   smooth: 30,
              // },
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 200,
              size: 2,
              duration: 0.3,
              opacity: 1,
              speed: 3,
              color: "#aab83e",
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};
