import React, { Component } from 'react'
import bg_pager from '../../dist/imgs/bg_pager.png'
import classes from './Topic.module.scss'
import Title from "../../components/Title/Title";
import Article from "../Article/Article";

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
        console.log(this.props);

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
                <div className={classes.Video}>
                    <figure className={classes.BgPaper}>
                        <img src={bg_pager} alt="" />
                    </figure>
                    {/* <iframe width="1612" height="786" src="https://www.youtube.com/embed/OEqTnGCcLUk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe> */}
                    <figure className={classes.BgPaper + " " + classes.Flip}>
                        <img src={bg_pager} alt="" />
                    </figure>
                </div>
                <div className={"container"}>
                    {title}
                    {materias}
                </div>
            </section>
        )
    }
}

export default Topic