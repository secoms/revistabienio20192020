import React, { Component } from 'react'
import classes from './Topic.module.scss'
import Title from "../Title/Title";
import Article from "../Article/Article";
import Video from '../Video/Video';

class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materias: null,
            activeMateria: null,
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            materias: this.props.materias,
        })
    }

    setActiveMateriaHandler = (event, materiaId) => {
        event.preventDefault()
        if (this.state.activeMateria !== materiaId) this.setState({ ...this.state, activeMateria: materiaId })
        else this.setState({ ...this.state, activeMateria: null })
    }

    getMateriaHandler = (idMateria) => {
        let materiasFiltered = (idMateria)
            ? this.state.materias.filter(materia => (materia.id === idMateria)) :
            this.state.materias
        return (materiasFiltered) ? materiasFiltered.map(materia => (
            <   Article
                key={materia.id}
                materia={materia}
                activeMateria={this.state.activeMateria}
                open={(materia.id === this.state.activeMateria)} toOpen={this.setActiveMateriaHandler} />
        )) : null
    }

    render() {

        const title = (this.props.topico[0]) ? <Title>{this.props.topico[0].title}</Title> : null
        if (this.props.materia) {

        }
        if (this.props.setActiveMateria) {

        }
        if (this.props.activeMateria) {

        }
        const materias = this.getMateriaHandler(this.state.activeMateria);

        return (
            <section className={classes.Topic}>
                {/* <Video /> */}
                <div className={"container"}>
                    {title}
                    {materias}
                </div>
            </section>
        )
    }
}

export default Topic