import React from 'react'
import classes from './ScrollTop.module.scss'
import { smothScroll } from '../../utils/utility'
const scrollTop = (props) => {
    console.log('toShow', props.toShow)
    const finalClasses = (props.toShow) ? classes.Btn
        : classes.Btn + ' ' + classes.Off
    return <a href="#nulllink" className={finalClasses} title="Ir para o início" onClick={(event) => {event.preventDefault(); smothScroll('#root')}}>
        <span className={classes.Arrow}></span>
    </a >

}

export default scrollTop