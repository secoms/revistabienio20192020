import React from 'react'
import classes from './header.module.scss'
import logo from '../../dist/imgs/logo_revista_h.png'

const header = props => {
    return (
        <header className={classes.Header}>
            <figure className={classes.Logo}>
                <img src={logo} />
            </figure>

        </header>
    )
}

export default header;