import React from 'react'
import Slider from "@farbenmeer/react-spring-slider";
import classes from './slider.module.scss';

const slider = props => {
    const slider = null
    if (props.categories) {
        let num = 1
        const items = props.categories.map(item => (
            <div key={item.key}>
                <h1>{item.title}</h1>
                <p>{item.title}</p>
                <div>
                    <span>{("0" + (num++)).slice(-2)}</span>
                </div>
            </div>
        ))
        slider = <Slider className={classes.Slider}> {items}</Slider>
    }
    return (
        { slider }

    )
}

export default slider;