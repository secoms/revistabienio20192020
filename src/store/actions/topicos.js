import * as actionsType from "./actionsType";
import * as constants from "../../utils/constants";
import axios from '../../customaxios'

export const resetActiveTopico = () => {
    return {
        type: actionsType.RESET_ACTIVE_TOPICO
    }
}

export const setActiveTopico = (activeTopico) => {
    return {
        type: actionsType.SET_ACTIVE_TOPICO,
        activeTopico: activeTopico
    }
}

export const setTopicos = (topicos) => {
    return {
        type: actionsType.SET_TOPICOS,
        topicos: topicos.topicos
    }
}

export const fetchErrorTopicos = error => {
    return {
        type: actionsType.FETCH_TOPICOS_FAILED,
        error: error
    }
}

export const initTopicos = () => {
    return dispatch => {
        axios.get(constants.API_TOPICOS).then(response => {
            dispatch(setTopicos(response.data))
        })
            .catch(error => {
                dispatch(fetchErrorTopicos(error.data))
            })
    }
}