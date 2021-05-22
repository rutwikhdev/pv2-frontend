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
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn</p>
                            <h4>Get in touch</h4>

                            <div className={styles.skills}>
                                <ul className={styles.skills_ul}>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank"><img className={styles.skills_ul_li} src={Github} alt=""/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank"><img className={styles.skills_ul_li} src={Kaggle} alt=""/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank"><img className={styles.skills_ul_li} src={LinkedIn} alt=""/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank"><img className={styles.skills_ul_li} src={Insta} alt=""/></a></li>
                                    <li><a href="https://github.com/rutwikhdev" target="_blank"><img className={styles.skills_ul_li} src={Twitter} alt=""/></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class={styles.social_links}>
                            <h4>I have worked with quite a bit.</h4>
                            <div>
                                <img src={Python} />
                                <img src={Javascript} />
                                {/*}// <img src={GoLang} /> */}
                                <img src={Docker} />
                                <img src={Kubernetes} />
                                <img src={ReactJs} />
                                <img src={MySql} className={styles.linux}/>
                                <img src={NodeJs} />
                                <img src={Tensorflow} />
                                <img src={Flask} className={styles.flask}/>
                                <img src={Linux} className={styles.linux}/>
                                
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
