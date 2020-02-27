import React from 'react';
import './App.scss';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Layout from './hoc/Layout/Layout';
import asyncComponent from "./hoc/asyncComponent";

const asyncHome = asyncComponent(() =>{
  return import ("./containers/Home/Home")
})


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function App() {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" exact component={asyncHome} />
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
