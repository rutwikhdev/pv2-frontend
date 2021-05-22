import React from 'react';

import classes from './Project.module.css';

const projectTile = (props) => {
    return (
        <div>
            <div className={classes.post}>
            <img className={classes.thumbnail} src={props.image} alt=""/>
                <div className={classes.postpreview}>
                    <h2 class={classes.posttitle}>{props.title}</h2>
                    <p class={classes.postintro}>{props.intro}</p>
                    <a href={props.link} target="_blank">view on github</a>
                </div>
            </div>
        </div>
    );
}

export default projectTile;
