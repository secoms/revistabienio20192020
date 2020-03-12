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

export const setMaterias = (materias, activeMateriaID) => {
    
    const activeMateria = materias.materias.filter(materia => {
        return (String(materia.id) === String(activeMateriaID))
    })

    return {
        type: actionsType.SET_MATERIAS,
        materias: materias,
        activeMateria: activeMateria[0]
    }
}

export const fetchErrorMaterias = (error) => {
    return {
        type: actionsType.FETCH_MATERIAS_FAILED,
        error: error
    }
}

export const initMaterias = (activeMateriaID) => {
    return dispatch => {
        axios.get(constants.API_MATERIAS).then(response => {
            dispatch(setMaterias(response.data, activeMateriaID))
        })
            .catch(error => {
                dispatch(fetchErrorMaterias(error.data))
            })
    }
}