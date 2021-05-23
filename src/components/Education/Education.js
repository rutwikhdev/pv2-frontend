import React from 'react';
import styles from './Education.module.css';

import Degree from '../../assets/logo/degree.png';
import Cert from '../../assets/logo/cert.png';


const Education = () => {
    return (
        <div className={styles.center}>
            <h2 className={styles.EduTitle}>Education and Certifications.</h2>
            <div className={styles.tile}>
                <div className={styles.tile_content}>
                    <img className={styles.degree} src={Degree} alt=""/>
                    <p className={styles.degree_names}>BSc. Computer Science, Mumbai University (S.K. Somaiya)</p>
                </div>
                <div className={styles.tile_content}>
                    <img className={styles.degree} src={Cert} alt=""/>
                    <p className={styles.degree_names}>Deep Learning Specialization, by DeepLearning.AI</p>
                </div>
                <div className={styles.tile_content}>
                    <img className={styles.degree} src={Cert} alt=""/>
                    <p className={styles.degree_names}>CNN's in Tensorflow, by DeepLearning.AI(Coursera)</p>
                </div>
                <div className={styles.tile_content}>
                    <img className={styles.degree} src={Cert} alt=""/>
                    <p className={styles.degree_names}>Introduction to Tensorflow for AI, by DeepLearning.AI(Coursera)</p>
                </div>
                <div className={styles.tile_content}>
                    <img className={styles.degree} src={Cert} alt=""/>
                    <p className={styles.degree_names}>Flutter Development Bootcamp, Academind(Udemy).</p>
                </div>
            </div>
        </div>
    );
}

export default Education;