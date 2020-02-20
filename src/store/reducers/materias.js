import * as actionsType from '../actions/actionsType'
import { updateObject } from '../../utils/utility'

const initialSatet = {
    materias: null,
    activeMateria: null,
    errror: null,
}

const setMaterias = (state, action) => {
    return updateObject(state,{
        materias: action.materias.materias
    })
}
const fetchMateriasFailed = (state, action) => {
    return updateObject(state,{
        error: action.error
    })
}
const setActiveMateria = (state, action) => {
    return updateObject(state,{
        activeMateria: action.activeMateria
    })
}
const resetActiveMateria = (state, action) => {
    return updateObject(state,{
        activeMateria:null
    })
}

const reducer = (state = initialSatet, action) => {
    switch (action.type) {
        case actionsType.SET_MATERIAS: return setMaterias(state, action)
        case actionsType.FETCH_MATERIAS_FAILED: return fetchMateriasFailed(state, action)
        case actionsType.SET_ACTIVE_MATERIA: return setActiveMateria(state, action)
        case actionsType.RESET_ACTIVE_MATERIA: return resetActiveMateria(state, action)
        default:return state
    }

}
export default reducer