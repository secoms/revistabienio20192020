import React, { Component } from 'react'
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Topic from "../../components/Topic/Topic";

// import { API_MATERIAS, API_TOPICOS } from "../../utils/constants";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

class Home extends Component {

    componentDidMount() {
        this.props.onInitTopicos()
        this.props.onInitMaterias()
    }

    clearAllActive = () => {
        this.props.resetActiveTopico()
        this.props.resetActiveMateria()
    }

    setActiveTopicoHandler = (event, topico) => {

        console.log('setActiveTopicoHandler', topico)
        event.preventDefault()
        if (this.props.activeTopico) {
            if (this.props.activeTopico.id === topico.id) this.clearAllActive()
            else this.props.setActiveTopico(topico)
        } else {
            this.props.setActiveTopico(topico)
        }
    }



    setTopicosHandler = (topicos,topicoID) => {
        return topicos.filter(topico => (topico.id === topicoID))
    }

    setMateriasHandler = (materias, materiaID) => {
        return (materias) ? materias.filter(materia => (materia.topicoid === materiaID)) : null
    }

    render() {

        const slider = (this.props.topicos)
            ? (
                <Slider
                    items={this.props.topicos}
                    setActiveTopico={this.setActiveTopicoHandler}
                    activeTopico={(this.props.activeTopico)
                        ? this.props.activeTopico.id
                        : null} />
            ) : null

        let topico = null
        if (this.props.activeTopico) {
            topico = <Topic
                topico={this.setTopicosHandler(this.props.topicos, this.props.activeTopico.id)}
                materias={this.setMateriasHandler(this.props.materias, this.props.activeTopico)}
            />
        }
        return (
            <div>
                <Header />
                {slider}
                {topico}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topicos: state.topicos.topicos,
        activeTopico: state.topicos.activeTopico,
        materias: state.materias.materias,
        activeMateria: state.materias.activeMateria,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTopicos: () => dispatch(actions.initTopicos()),
        onInitMaterias: () => dispatch(actions.initMaterias()),
        setActiveTopico: (topico) => dispatch(actions.setActiveTopico(topico)),
        resetActiveTopico: () => dispatch(actions.setActiveTopico()),
        resetActiveMateria: () => dispatch(actions.setActiveMateria()),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
