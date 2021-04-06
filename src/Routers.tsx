import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Routes/Home';
import Login from './Routes/Login';
import Project from './Routes/Project';
import People from './Routes/People';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/project" component={Project} />
      <Route path="/people" component={People} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
