import React from 'react';
import ProjectBox from './ProjectBox';
import styled from 'styled-components';

const BoxListStyle = styled.li`
  padding: 0.5rem;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const PersonBoxList = () => (
  <BoxListStyle>
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
  </BoxListStyle>
);

export default PersonBoxList;
