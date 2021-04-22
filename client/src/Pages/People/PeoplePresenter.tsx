import React from 'react';
import styled from 'styled-components';

import PeopleRecommend from '../../Components/People/PeopleRecommend';
import PeopleHeader from '../../Components/People/PeopleHeader';
import PeopleList from '../../Components/People/PeopleList';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0px auto;
`;

const PeoplePresenter = () => (
  <Container>
    <PeopleHeader />
    <PeopleRecommend />
    <PeopleList />
  </Container>
);

export default PeoplePresenter;
