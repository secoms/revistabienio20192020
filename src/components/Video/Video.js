import React, { Component } from 'react'
import bg_pager from '../../dist/imgs/bg_pager.png'
import classes from "./Video.module.scss";

const Video = (props) => {
    
    return (
        <div className={classes.Video}>
            <figure className={classes.BgPaper}>
                <img src={bg_pager} alt="" />
            </figure>
            <iframe width="1612" height="786" src="https://www.youtube.com/embed/OEqTnGCcLUk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
            <figure className={classes.BgPaper + " " + classes.Flip}>
                <img src={bg_pager} alt="" />
            </figure>
        </div>
    )
}
export default Video