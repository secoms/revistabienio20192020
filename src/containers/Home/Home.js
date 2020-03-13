import React, { Component } from 'react'
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import TopicHeader from "../../components/TopicHeader/TopicHeader";
import Materia from "../../components/Materia/Materia";
import ListMaterias from "../../components/ListMaterias/ListMaterias";
import { smothScroll } from '../../utils/utility'
// import { API_MATERIAS, API_TOPICOS } from "../../utils/constants";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import ScrollTop from '../../components/ScrollTop/ScollTop';
import { ROOT_FOLDER } from '../../utils/constants';


class Home extends Component {
    state = {
        toShowScrollToTop: false
    }

    componentDidMount() {
        let activeTopicoID = null
        let activeMateriaID = null

        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('topico')) {
            activeTopicoID = urlParams.get('topico')
            if (urlParams.has('materia')) {
                activeMateriaID = urlParams.get('materia')

            }
        }

        this.props.onInitTopicos(activeTopicoID)
        this.props.onInitMaterias(activeMateriaID)


        document.addEventListener('scroll', () => {
            this.setState({ toShowScrollToTop: (window.pageYOffset > 600) })
        })
    }
    
    clearAllActives = () => {
        this.props.resetActiveTopico()
        this.props.resetActiveMateria()
    }

    setActiveTopicoHandler = (event, topico) => {
        let moveDown = false
        this.clearAllActives()
        event.preventDefault()
        if (this.props.activeTopico) {
            if (this.props.activeTopico.id === topico.id) {
                this.clearAllActives()
                this.props.history.replace( ROOT_FOLDER);

            } else {
                this.props.setActiveTopico(topico)
                this.props.history.replace('?topico=' + topico.id);
                moveDown = true
            }
        } else {
            this.props.setActiveTopico(topico)
            this.props.history.replace('?topico=' + topico.id);
            moveDown = true
        }

        if (moveDown) {
            smothScroll('.MainSlider', 1000)
        }
    }

    setActiveMateriaHandler = (event, materia, topicoID) => {
        event.preventDefault()
        this.props.history.replace('?topico=' + topicoID + '&materia=' + materia.id)
        this.props.setActiveMateria(materia)
    }

    resetActiveMateriaHandler = (event) => {
        event.preventDefault()
        this.props.resetActiveMateria()
    }

    /**
     *  SET Topico, List of Materia HANDLER 
     */

    getTopicoHandler = (topicos, topicoID) => {
        return topicos.filter(topico => (topico.id === topicoID))
    }

    setListMateriasHandler = (materias, topicoID) => {
        const filterdMaterias = (materias) ? materias.filter(materia => (materia.topicoid === topicoID)) : null
        return <ListMaterias materias={filterdMaterias} click={this.setActiveMateriaHandler} topicoID={topicoID} />
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
            topicHeader = <TopicHeader topico={this.getTopicoHandler(this.props.topicos, this.props.activeTopico.id)} />
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
                <ScrollTop toShow={this.state.toShowScrollToTop}></ScrollTop>
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
        onInitTopicos: (activeTopicoID) => dispatch(actions.initTopicos(activeTopicoID)),
        onInitMaterias: (activeMateriaID) => dispatch(actions.initMaterias(activeMateriaID)),
        setActiveTopico: (topico) => dispatch(actions.setActiveTopico(topico)),
        setActiveMateria: (materia) => dispatch(actions.setActiveMateria(materia)),
        resetActiveTopico: () => dispatch(actions.setActiveTopico()),
        resetActiveMateria: () => dispatch(actions.setActiveMateria()),


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
