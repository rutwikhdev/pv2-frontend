import React from 'react';
import styles from './HomePage.module.css';

import AboutPage from '../AboutPage/AboutPage';
import ProjectsPage from '../ProjectsPage/Page/ProjectsPage';
import Particles from '../ParticlesConfig/ParticlesConfig'

import Me from '../../assets/logo/me.jpg';
import RobotImage from '../../assets/logo/robot.jpg';

const homepage = (props) => {

    var bgColors = {
        "Default": "#81b71a",
        "Green": "#8CC152",
        "Red": "#E9573F",
        "Yellow": "#F6BB42"
    };

    return (
        <div className={styles.page}>
            <Particles />
            <section className={styles.s1}>
                <div className={styles.main_container}>
                    <div className={styles.greeting_wrapper}>
                        <h1>Hey, I'm Rutwik Hiwalkar</h1>
                    </div>
                    <div className={styles.intro_wrapper}>
                        <div className={styles.nav_wrapper}>
                            <div className={styles.dots_wrapper}>
                                <div style={{ backgroundColor: bgColors.Red }} className={styles.browser_dot}></div>
                                <div style={{ backgroundColor: bgColors.Yellow }} className={styles.browser_dot}></div>
                                <div style={{ backgroundColor: bgColors.Green }} className={styles.browser_dot}></div>
                            </div>
                        </div>

                        <div className={styles.left_column}>
                            <img className={styles.profile_pic} src={Me} alt="profile pic"/>
                        </div>

                        <div className={styles.right_column}>
                            <div className={styles.preview_shadow}>
                                <div className={styles.preview}>
                                    <h3>Status</h3>
                                    <p>Hard worker, Dynamic learner, Team sport, AI nerd, Linux advocate are some of the hats I wear.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <AboutPage />
            <ProjectsPage />
        </div>
    )
};

export default homepage;
