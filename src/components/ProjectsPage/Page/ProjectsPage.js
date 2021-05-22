import React from 'react';

import ProjectTile from '../Project/Project';
import Education from '../../Education/Education';
import classes from './ProjectsPage.module.css'

import CovidTracker from '../Images/covid.png';
import PathFinder from '../Images/path1.png';
import Unsplash from '../Images/unsplash.png';
import Brain from '../Images/brain.png';
import Hand from '../Images/hand.png'
import Dogo from '../Images/dogo.jpeg';
import Wine from '../Images/wine.jpeg';
import Mask from '../Images/mask.jpeg';
import GoogleClass from '../Images/gc.jpg';

const projects = () => {
    return (
        <div className={classes.projects}>
            <section className={classes.s1}>
                <div className={classes.main_container}>
                <h2 className={classes.projectstitle}>Some of my Projects.</h2>
                <div className={classes.postwrapper}>
                    {/* <ProjectTile
                        title="Unsplash Image Downloader"
                        intro="Short but very useful script to download images in bulk for various projects."
                        link="https://github.com/rutwikhdev/ImageDownloader"
                        image={Unsplash}
                    /> */}
                    <ProjectTile
                        title="PathFinder"
                        intro="A shortest path finding visualization with breadth first search algorithm."
                        link="https://github.com/rutwikhdev/Pathfinder-Python"
                        image={PathFinder}
                    />
                    <ProjectTile
                        title="Google Classroom Clone"
                        intro="A microservice architecture application with MERN stack."
                        link="https://github.com/rutwikhdev/MaskDetectorDarknet"
                        image={GoogleClass}
                    />
                    <ProjectTile
                        title="Covid-19 Tracker"
                        intro="So many free apis and resources available during this time, I had to make it."
                        link="https://github.com/rutwikhdev/Covid-tracker"
                        image={CovidTracker}
                    />
                    <ProjectTile
                        title="Handwritten Digit Recognition"
                        intro="MNIST - Using a Deep Neural Network from scratch."
                        link="https://github.com/rutwikhdev/HandWrittenDigitRecognition"
                        image={Hand}
                    />
                    <ProjectTile
                        title="Brain Tumor Classification"
                        intro="Classifying Tumor as malignant or benign based on the MRI scans."
                        link="https://github.com/rutwikhdev/BrainTumorNet"
                        image={Brain}
                    />
                    <ProjectTile
                        title="Dogs Breed Classification"
                        intro="Recognizing between different breeds of dogs using Transfer Learning."
                        link="https://github.com/rutwikhdev/DogClassifier"
                        image={Dogo}
                    />
                    <ProjectTile
                        title="Red Wine Quality Detection"
                        intro="Using data analysis to get insights on how various factors affect the quality of red wine and building a prediction model."
                        link="https://github.com/rutwikhdev/RedWine-Quality-Detection"
                        image={Wine}
                    />
                    <ProjectTile
                        title="Mask Detector"
                        intro="Using object detection to detect if a person is wearing a mask or not."
                        link="https://github.com/rutwikhdev/MaskDetectorDarknet"
                        image={Mask}
                    />
                </div>
                </div>
            </section>
            
            <Education />
        </div>
    );
};

export default projects;
