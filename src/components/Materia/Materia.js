import React from 'react'
import classes from './Materia.module.scss'


const article = (props) => {
    let mainTitle = null
    let body = null
    const topicoID = props.materia.topicoid
    const materiaID = props.materia.id
    if (props.materia) {
        body = props.materia.main.body.map(section => {
            const key = new Date().getMilliseconds + "" + Math.random(200)
            switch (section.type) {
                case "text": return <p key={key} className={classes.Text}>{section.content}</p>
                case "subtitle": return <h2 key={key} className={classes.Subtitle}>{section.content.toLowerCase()}</h2>
                case "olho": return (<div key={key} className={classes.Olho}>
                    <p className={classes.Citation}>{section.content}</p>
                    <p className={classes.Who}>
                        <span className={classes.Name}>{section.who}</span>
                        <span className={classes.Position}>{section.position}</span>
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
            <a href={'https://www.facebook.com/sharer.php?s=100&p[url]=http%3A%2F%2Flocalhost%3A3000%2F%3Ftopico%3D' + topicoID + '%26materia%3D' + materiaID + '&p[title]=sadadasdaqdasdasdasda'}
                target="_blank"
            >facebook</a>
            <br />

            <a href={'https://twitter.com/share?url=http%3A%2F%2Flocalhost%3A3000%2F%3Ftopico%3D' + topicoID + '%26materia%3D' + materiaID + '&text=sadadasdaqdasdasdasda&hashtags=%23TJRN%20'}
                target="_blank"
            >twitter</a>
            <br />

            <a href={'https://api.whatsapp.com/send?text=AAAAAAAAAAAAAAAAAAaa'}
                target="_blank"
            >whatsapp</a>
            <br />

        </article>
    )
}
export default article
