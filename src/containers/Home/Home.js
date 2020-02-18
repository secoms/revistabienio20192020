import React, { Component } from 'react'
import Header from "../../components/header/header";
import Slider from "../../components/slider/slider";
import Footer from "../../components/footer/footer";
import Article from "../../components/article/article";

import Axios from 'axios';
import { API_MATERIAS, API_TOPICOS } from "../../utils/constants";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicos: null,
            materias: null,
            activeTopico: null,
            activeMateria: null,

        }
    }

    getTopicos = () => {
        Axios.get(API_TOPICOS).then(response => {
            this.setState({ ...this.state, topicos: response.data.topicos })
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
        this.getTopicos()
        this.getMaterias()
    }

    setActiveTopico = (event, topicoid) => {
        event.preventDefault()
        console.log(event);
        console.log(topicoid);

        this.setState({ ...this.state, topicoid })
    }

    render() {

        const slider = (this.state.topicos) 
            ? <Slider items={this.state.topicos} setActiveTopico={this.setActiveTopico} /> 
            : null

        const materia = (this.state.materias) ? <Article materia={this.state.materias[0]} /> : null

        return (
            <div>
                <Header />
                {slider}
                {materia}
                <Footer />
            </div>
        )
    }
}

export default Home
