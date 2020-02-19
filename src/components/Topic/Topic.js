import React, { Component } from 'react'
import bg_pager from '../../dist/imgs/bg_pager.png'
import classes from './Topic.module.scss'
import Article from "../../components/article/article";

class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materias: null,
            activeMateria: null,
        }
    }

    setActiveMateriaHandler = (event, topicoid) => {
        event.preventDefault()
        if (this.state.activeMateria !== topicoid) this.setState({ ...this.state,  activeMateria: topicoid })
        else this.setState({ ...this.state,  activeMateria: null })
    }
    
    render() {
        if (this.props.topico){

        }
        if (this.props.materia){

        }
        if (this.props.setActiveMateria){

        }
        if (this.props.activeMateria){
            
        }
        const materias = (this.props.materias) ? this.props.materias.map(materia => <Article materia={materia} />) : null
        return (
            <section className={classes.Topic}>
                <div className={classes.Video}>
                    <figure className={classes.BgPaper}>
                        <img src={bg_pager} alt="" />
                    </figure>
                    <iframe
                        width="1612" height="786" src="https://www.youtube.com/embed/OEqTnGCcLUk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                    <figure className={classes.BgPaper + " " + classes.Flip}>
                        <img src={bg_pager} alt="" />
                    </figure>
                </div>

                {materias}
            </section>
        )
    }
}

export default Topic