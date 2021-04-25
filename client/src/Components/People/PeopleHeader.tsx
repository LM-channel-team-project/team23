import React from 'react';
import styled from 'styled-components';
import Title from '../Common/Title';
import PeopleSearchOption from './PeopleSearchOption';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
`;

const PeopleHeader = () => (
  <Header>
    <Title subtitle="LET`s with" title="멤버 모집하기" />
    <PeopleSearchOption />
  </Header>
);

export default PeopleHeader;
