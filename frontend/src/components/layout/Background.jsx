import React from 'react';
import { Particles } from "react-particles";
import { loadFull } from "tsparticles"; 
import './Background.css';


function Background() {
  // Settings Particles.js
  const particlesInit = async (engine) => {
    await loadFull(engine); 
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1400,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 5,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        out_mode: "out",
      },
    },
    background: {
        color: "#404040",
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
  );
}

export default Background;
