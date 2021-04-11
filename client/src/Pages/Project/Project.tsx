import React from 'react';
import styled from 'styled-components';
import ProjectHeader from '../../Components/Project/ProjectHeader';
import ProjectBox from '../../Components/Project/ProjectBox';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  height: 100%;
  min-height: 100vh;
`;

const Project = () => (
  <Container>
    <ProjectHeader />
    <ProjectBox />
  </Container>
);

export default Project;
