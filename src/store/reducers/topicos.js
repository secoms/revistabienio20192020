import * as actionsType from '../actions/actionsType'
import { updateObject } from '../../utils/utility'

const initialState = {
    topicos: null, 
    activeTopico: null,
    error: null,
}

const setTopicos = (state, action) => {
    return updateObject(state, {
        topicos:action.topicos
    })
}

const fetchErrorTopicos = (state, action) => {
    return updateObject(state, {
        error:action.error
    })
}

const setActiveTopico = (state, action) => {
    console.log('actions -> activeTopico', action.activeTopico)
    return updateObject(state, {
        activeTopico:action.activeTopico
    })
}

const resetActiveTopico = (state, action) => {
    return updateObject(state, {
        activeTopico:null
    })
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsType.SET_TOPICOS: return setTopicos(state, action )
        case actionsType.FETCH_TOPICOS_FAILED: return fetchErrorTopicos(state, action )
        case actionsType.SET_ACTIVE_TOPICO: return setActiveTopico(state, action )
        case actionsType.RESET_ACTIVE_TOPICO: return resetActiveTopico(state, action )
        default: return state
    }
}

export default reducer