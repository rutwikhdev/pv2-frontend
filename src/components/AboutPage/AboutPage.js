import React from 'react';

import styles from './AboutPage.module.css';

import Github from '../../assets/logo/githubtp.png';
import Insta from '../../assets/logo/instagram.png';
import LinkedIn from '../../assets/logo/linkedinbw.png';
import Twitter from '../../assets/logo/twitter.png';
import Kaggle from '../../assets/logo/kaggle.png';

import Python from '../../assets/tech/python.png';
import Docker from '../../assets/tech/docker.png';
import Kubernetes from '../../assets/tech/kube.png';
import Tensorflow from '../../assets/tech/tensorflow.png';
import NodeJs from '../../assets/tech/nodejs.png';
import Javascript from '../../assets/tech/js.png';
// import GoLang from '../assets/tech/golang.png';
import ReactJs from '../../assets/tech/reactjs.png';
import Flask from '../../assets/tech/flask.png';
// import PyTorch from '../assets/tech/pytorch.png';
import Linux from '../../assets/tech/linux.png';
import MySql from '../../assets/tech/sql.png';

const aboutpage = () => {
    return (
        <div className={styles.about}>
            <section className={styles.s2}>
                <div className={styles.main_container}>
                    <div class={styles.about_wrapper}>
                        <div class="about-me">
                            <h4>A little about me</h4>
                            <p>I'm a 21 year old developer from Mumbai, India.<br/>Stack = [nodejs, react, flask, javascript, python, docker, tensorflow, github]</p>
                            <p>Also I'm very familiar with linux and Deep Learning/Machine Learning.</p>
                            <p>I've been learning and working on personal projects everyday for the past 2 years. And have worked with handful of technologies</p>
                            <h4>Get in touch</h4>

                            <div className={styles.skills}>
                                <ul className={styles.skills_ul}>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank" rel="noreferrer"><img className={styles.skills_ul_li} src={Github} alt="Github"/></a></li>
                                    <li><a href="https://www.kaggle.com/rutwikhiwalkar" target="_blank" rel="noreferrer"><img className={styles.skills_ul_li} src={Kaggle} alt="Kaggle"/></a></li>
                                    <li><a href="https://www.linkedin.com/in/rutwikhdev/" target="_blank" rel="noreferrer"><img className={styles.skills_ul_li} src={LinkedIn} alt="Linkedin"/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank" rel="noreferrer"><img className={styles.skills_ul_li} src={Insta} alt="Instagram"/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank" rel="noreferrer"><img className={styles.skills_ul_li} src={Twitter} alt="Twitter"/></a></li>
                                </ul>
                            </div>
                            <div className={styles.resume_link}>
                                <a href='../../../public/resume.pdf' download>Download Resume</a>
                            </div>
                        </div>

                        <div class={styles.social_links}>
                            <h4>I have worked with quite a bit.</h4>
                            <div>
                                <img src={Python} alt="Python" title="Python"/>
                                <img src={Javascript} alt="Javascript" title="Javascript"/>
                                {/*}// <img src={GoLang} /> */}
                                <img src={Docker} alt="Docker" title="Docker"/>
                                <img src={Kubernetes} alt="Kubernetes" title="Kubernetes"/>
                                <img src={ReactJs} alt="ReactJS" title="ReactJS"/>
                                <img src={MySql} className={styles.linux} alt="MySql" title="MySql"/>
                                <img src={NodeJs} alt="NodeJS" title="NodeJS"/>
                                <img src={Tensorflow} alt="Tensorflow" title="Tensorflow"/>
                                <img src={Flask} className={styles.flask} alt="Flask" title="Flask"/>
                                <img src={Linux} className={styles.linux} alt="Linux" title="Linux"/>
                                
                                {/* <img src={PyTorch} className={styles.pytorch}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default aboutpage;
