import React from 'react'
import classes from './Article.module.scss'


const article = (props) => {
    let body = null
    let mainTitle = null

    if (props.open && props.materia) {
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
        mainTitle = ((props.activeMateria === props.materia.id))
            ? <h1 onClick={(event) => props.toOpen(event, props.materia.id)}>{props.materia.main.title}</h1>
            : null
    }else {
        mainTitle = (props.materia.main.title)
            ? <h1 onClick={(event) => props.toOpen(event, props.materia.id)}>{props.materia.main.title}</h1>
            : null
    }


    console.log((props.activeMateria == props.materia.id))
    console.log(props.materia.id)
    console.log(props.activeMateria)
    return (
        <article className={classes.Article}>
            {mainTitle}
            {body}
        </article>
    )
}
export default article
