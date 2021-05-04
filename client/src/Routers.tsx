import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Components/Common/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Project from './Pages/Project';
import People from './Pages/People';
import PeopleDetail from './Pages/People/PeopleDetail';
import Footer from './Components/Common/Footer';
import Signup from './Pages/Signup';
import Mypage from './Pages/Mypage';
import BuildProject from './Pages/BuildProject';
import Auth from './hoc/auth';

const Style = styled.div`
  padding-top: 60px;
`;

const Router = () => (
  <Style>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/project" component={Auth(Project, null)} />
        <Route path="/signup" component={Auth(Signup, false)} />
        <Route path="/people" exact component={Auth(People, null)} />
        <Route path="/people/:username" component={Auth(PeopleDetail, null)} />
        <Route path="/my" component={Auth(Mypage, true)} />
        <Route path="/buildProject" component={Auth(BuildProject, true)} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Style>
);

export default Router;
