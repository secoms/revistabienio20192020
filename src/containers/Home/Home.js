import React, { Component } from 'react'
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import TopicHeader from "../../components/TopicHeader/TopicHeader";
import Materia from "../../components/Materia/Materia";
import ListMaterias from "../../components/ListMaterias/ListMaterias";

// import { API_MATERIAS, API_TOPICOS } from "../../utils/constants";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'


class Home extends Component {

    componentDidMount() {
        this.props.onInitTopicos()
        this.props.onInitMaterias()
    }
    /**
     *  UPDATE STATE ACTIVE OR DESACTIVE
     */
    
    clearAllActives = () => {
        this.props.resetActiveTopico()
        this.props.resetActiveMateria()
    }
    
    setActiveTopicoHandler = (event, topico) => {
        this.clearAllActives()
        event.preventDefault()
        if (this.props.activeTopico) {
            if (this.props.activeTopico.id === topico.id) this.clearAllActives()
            else this.props.setActiveTopico(topico)
        } else {
            this.props.setActiveTopico(topico)
        }
    }
    
    setActiveMateriaHandler = (event, materia) => {
        event.preventDefault()
        this.props.setActiveMateria(materia)
    }
    
    resetActiveMateriaHandler = (event) => {
        event.preventDefault()
        this.props.resetActiveMateria()
    }
    
    /**
     *  SET Topico, List of Materia HANDLER 
     */

    setTopicosHandler = (topicos, topicoID) => {
        return topicos.filter(topico => (topico.id === topicoID))
    }

    setListMateriasHandler = (materias, topicoID) => {
        const filterdMaterias = (materias) ? materias.filter(materia => (materia.topicoid === topicoID)) : null
        return <ListMaterias materias={filterdMaterias} click={this.setActiveMateriaHandler} />
    }

    setMateriaHandler = (materia) => {
        return <Materia materia={materia} close={this.resetActiveMateriaHandler} />
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

        let topicHeader, areaMaterias = null
        if (this.props.activeTopico) {
            topicHeader = <TopicHeader topico={this.setTopicosHandler(this.props.topicos, this.props.activeTopico.id)} />
            if (this.props.activeMateria)
                areaMaterias = this.setMateriaHandler(this.props.activeMateria)
            else
                areaMaterias = this.setListMateriasHandler(this.props.materias, this.props.activeTopico.id)
        } 
        return (
            <div>
                <Header />
                {slider}
                {topicHeader}
                {areaMaterias}
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
        setActiveMateria: (materia) => dispatch(actions.setActiveMateria(materia)),
        resetActiveTopico: () => dispatch(actions.setActiveTopico()),
        resetActiveMateria: () => dispatch(actions.setActiveMateria()),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
