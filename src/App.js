import React from 'react';
import './App.scss';
import Home from "./containers/Home/Home";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/"/>
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
