import React, { Component } from 'react'
import classes from './Topic.module.scss'
import Title from "../Title/Title";
import Video from '../Video/Video';

const TopicHeader = (props) => {

    const title = (props.topico[0]) ? <Title>{props.topico[0].title}</Title> : null
    const video = (props.video) ? <Video /> : null

    return (
        <section className={classes.Topic}>
            {video}
            <div className={"container"}>
                {title}
            </div>
        </section>
    )
}

export default TopicHeader