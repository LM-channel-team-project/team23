import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import People from './Pages/People';
import Footer from './Components/Common/Footer';

const Style = styled.div`
  padding-top: 75px;
`;

const Router = () => (
  <Style>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/project" component={Project} />
        <Route path="/people" component={People} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Style>
);

export default Router;
