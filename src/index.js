import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import materiasReducer from "./store/reducers/materias";
import topicosReducer from "./store/reducers/topicos";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
    materias:materiasReducer,
    topicos:topicosReducer,
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        {/* <BrowserRouter basename="/2019-2020"> */}
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
