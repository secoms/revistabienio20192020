import React, { Component } from 'react'
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Topic from "../../components/Topic/Topic";

import Axios from 'axios';
import { API_MATERIAS, API_TOPICOS } from "../../utils/constants";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicos: null,
            materias: null,
            activeTopico: null,
        }
    }

    getTopicos = () => {
        Axios.get(API_TOPICOS).then(response => {
            this.setState({ ...this.state, topicos: response.data.topicos, activeTopico: "04" })
        }).catch(error => {
        })
    }

    getMaterias = () => {
        Axios.get(API_MATERIAS).then(response => {
            this.setState({ ...this.state, materias: response.data.materias })
        }).catch(error => {
        })
    }

    componentDidMount() {
        this.getMaterias()
        this.getTopicos()
    }

    setActiveTopicoHandler = (event, topicoid) => {
        event.preventDefault()
        if (this.state.activeTopico !== topicoid) this.setState({ ...this.state, activeTopico: topicoid })
        else this.setState({ ...this.state, activeTopico: null })
    }


    setTopicosHandler = (topicos) => {
        return topicos.filter(topico => (topico.id === this.state.activeTopico))
    }

    setMateriasHandler = (materias, materiaID) => {
        return materias.filter(materia => (materia.topicoid === materiaID))
    }

    render() {

        const slider = (this.state.topicos)
            ? <Slider items={this.state.topicos} setActiveTopico={this.setActiveTopicoHandler} activeTopico={this.state.activeTopico} />
            : null

        let topico = null
        if (this.state.activeTopico) {
            topico = <Topic
                topico={this.setTopicosHandler(this.state.topicos)}
                materias={this.setMateriasHandler(this.state.materias, this.state.activeTopico)}
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

export default Home
