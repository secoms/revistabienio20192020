import * as actionsType from "./actionsType";
import * as constants from "../../utils/constants";
import axios from "../../customaxios";

export const resetActiveMateria = () => {
    return {
        type: actionsType.RESET_ACTIVE_MATERIA
    }
}

export const setActiveMateria = (activeMateria) => {
    return {
        type: actionsType.SET_ACTIVE_MATERIA,
        activeMateria: activeMateria

    }
}

export const setMaterias = (materias) => {
    return {
        type: actionsType.SET_MATERIAS,
        materias: materias
    }
}

export const fetchErrorMaterias = (error) => {
    return {
        type: actionsType.FETCH_MATERIAS_FAILED,
        error: error
    }
}

export const initMaterias = () => {
    return dispatch => {
        axios.get(constants.API_MATERIAS).then(response => {
            dispatch(setMaterias(response.data))
        })
            .catch(error => {
                dispatch(fetchErrorMaterias(error.data))
            })
    }
}