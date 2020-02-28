import React from 'react'
import { VIDEOS_URL } from "../../utils/constants";
import bg_pager from '../../dist/imgs/bg_pager.png'
import classes from "./Video.module.scss";

const Video = (props) => {
    const videoArea = (!props.video)
        ? null
        : <div className={classes.Video}>
            <figure className={classes.BgPaper}>
                <img src={bg_pager} alt="" />
            </figure>
            <video key={VIDEOS_URL + props.video} width="100%" height="auto" autoPlay  loop muted>
                <source
                    src={VIDEOS_URL + props.video}
                    type="video/mp4" />
            </video>
            <figure className={classes.BgPaper + " " + classes.Flip}>
                <img src={bg_pager} alt="" />
            </figure>
        </div>

    return (videoArea)
}
export default Video