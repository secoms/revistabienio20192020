import React from 'react'
import classes from './Footer.module.scss'
import bg_pager from '../../dist/imgs/bg_pager.png'
import logoTj from '../../dist/imgs/logo_tj.svg'

const footer = props => {
    return (
        <footer className={classes.Footer}>
            <figure className={classes.BgPaper}>
                <img src={bg_pager} alt=""/>
            </figure>
            <a href="http://www.tjrn.jus.br/" target="_blank"
                title='Acessar site do TJRN '
                alt='Acessar site do TJRN em nova janela' >

                <figure className={classes.Logo}>
                    <img src={logoTj}  alt="Lojo do TJRN"/>
                </figure>
            </a>

        </footer>
    )
}

export default footer;