import React from 'react';
import styled from 'styled-components';
import PeopleListItem from './PeopleListItem';

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
  width: 100%;
`;

const PeopleList = () => (
  <List>
    <PeopleListItem></PeopleListItem>
  </List>
);

export default PeopleList;
