import React from 'react';
import styled from 'styled-components';
import ProjectView from '../../Components/Project/ProjectView';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const ProjectHeader = styled.h2`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  line-height: 1.5;
  margin: 35px 0;
`;

const SmallTittle = styled.span`
  color: #ea6560;
  font-size: 0.875rem;
`;

const BigTitle = styled.span`
  color: #42495b;
  font-size: 1.75rem;
`;

const Project = () => (
  <Container>
    <ProjectHeader>
      <SmallTittle>Study with us!</SmallTittle>
      <BigTitle>함께 할 프로젝트 살펴보기</BigTitle>
    </ProjectHeader>
    <ProjectView />
  </Container>
);

export default Project;
