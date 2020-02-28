import React from 'react'
import classes from './Title.module.scss';

const title = props => {
    return (
        <h1 className={"TopicoTitle " + classes.Title}>
            {props.children}
        </h1>
    )
}

export default title;