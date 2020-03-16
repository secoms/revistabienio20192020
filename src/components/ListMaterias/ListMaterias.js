import React from 'react'
import classes from './ListMaterias.module.scss'


const listMaterias = (props) => {
    let links = null
    if (props.materias) {
        links = props.materias.map(materia => {
            return (
                <li key={materia.id}>
                    <a href="#nulllink"
                        className={classes.Link}
                        onClick={(event) => props.click(event, materia, props.topicoID)}
                        alt={"Matéria: " + materia.main.title}
                        title={"Matéria: " + materia.main.title}>
                        <h2 className={classes.Titulo}>
                            <span></span> {materia.main.title}
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