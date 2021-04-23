import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import ProjectDetail from './Pages/ProjectDetail';
import People from './Pages/People';
import Footer from './Components/Common/Footer';
import Signup from './Pages/Signup';
import Mypage from './Pages/Mypage';
import BuildProject from './Pages/BuildProject';

const Style = styled.div`
  padding-top: 60px;
`;

const Router = () => (
  <Style>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/project" exact component={Project} />
        <Route path="/project/1" component={ProjectDetail} />
        <Route path="/signup" component={Signup} />
        <Route path="/people" component={People} />
        <Route path="/my" component={Mypage} />
        <Route path="/buildProject" component={BuildProject} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Style>
);

export default Router;
