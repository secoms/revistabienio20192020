import React from 'react'
import classes from './Footer.module.scss'
import bg_pager from '../../dist/imgs/bg_pager.png'
import logoTj from '../../dist/imgs/logo_tj.png'

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <figure className={classes.BgPaper}>
                <img src={bg_pager} alt=""/>
            </figure>
            <figure className={classes.Logo}>
                <img src={logoTj}  alt="Lojo do TJRN"/>
            </figure>

        </footer>
    )
}

export default footer;