import React from 'react';
import ProjectBox from './ProjectBox';
import styled from 'styled-components';

const BoxListStyle = styled.div`
  padding: 0.5rem;
`;

const PersonBoxList = () => (
  <BoxListStyle>
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
  </BoxListStyle>
);

export default PersonBoxList;
