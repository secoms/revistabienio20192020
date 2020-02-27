import React from 'react'
import classes from './ListMaterias.module.scss'


const listMaterias = (props) => {
    let links = null
    if (props.materias) {
        links = props.materias.map(materia => {
            return (
                <li key={materia.id}>
                    <a href="#nulllink" className={classes.Link} onClick={(event) => props.click(event, materia)}>
                        <h2 >
                            {materia.main.title}
                        </h2>
                    </a>
                </li>
            )
        })
    }


    return (
        <ul className={classes.ListMaterias + " container"}>
            {links}
        </ul>
    )
}
export default listMaterias
