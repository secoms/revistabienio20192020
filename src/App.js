import React from 'react';
import logo from './logo.svg';
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
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
