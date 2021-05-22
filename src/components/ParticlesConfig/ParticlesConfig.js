import React from 'react';
import styles from './ParticlesConfig.module.css';

import Particles from 'react-particles-js';


const particlesDefault = ( props ) => {
    let pcolorWhite = "#ffffff";
    let pcolorGray = "#212121";

    return (
        <div className={ styles.page }>

        <Particles
            className={styles.cover}
            params={{
                fpsLimit: 60,
                particles: {
                color: {
                  value: pcolorGray,
                },
                links: {
                  color: pcolorGray,
                  distance: 175,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 8,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 3,
                  anim: {
                      enable: true,
                      speed: 7,
                  }
                },
                },
                detectRetina: true,
                interactivity: {
                    enable: true,
                    mode: "grab",
                },
                }}
            />

        </div>
    )
};

export default particlesDefault;
