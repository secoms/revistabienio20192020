import React from 'react'
import classes from './Topic.module.scss'
import Title from "../Title/Title";
import Video from '../Video/Video';

const TopicHeader = (props) => {
    let title = null
    let video = null
    if (props.topico) {
        title = (props.topico[0].title) ? <Title>{props.topico[0].title}</Title> : null
        video = (props.topico[0].video) ? <Video video={props.topico[0].video} /> : null
        console.log('props.topico[0].video', props.topico[0].video)
        console.log('topicHeader ', props.topico[0])
    }

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