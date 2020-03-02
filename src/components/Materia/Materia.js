import React from 'react'
import classes from './Materia.module.scss'


const article = (props) => {
    let mainTitle = null
    let body = null

    if (props.materia) {
        body = props.materia.main.body.map(section => {
            const key = new Date().getMilliseconds + "" + Math.random(200)
            switch (section.type) {
                case "text": return <p key={key} className={classes.Text}>{section.content}</p>
                case "subtitle": return <h2 key={key} className={classes.Subtitle}>{section.content.toLowerCase()}</h2>
                case "olho": return (<div key={key} className={classes.Olho}>
                    <p className={classes.Citation}>{section.content}</p>
                    <p className={classes.Who}>
                        <span>{section.who}</span>
                        <span>{section.position}</span>
                    </p>
                </div>)
                default: return ""
            }
        })
        mainTitle = <h1>{props.materia.main.title}</h1>
    }

    return (
        <article className={classes.Materia + " container"}>
            <button className={classes.BtnClose} onClick={(event) => props.close(event)} title="Exibir matérias do tópico">
                voltar
            </button>
            {mainTitle}
            {body}
        </article>
    )
}
export default article
