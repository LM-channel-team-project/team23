import React from 'react';
import styled from 'styled-components';
import ProjectSearchOption from '../../Components/Project/ProjectSearchOption';
import Title from '../Common/Title';

const HeaderContainer = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
`;

const ProjectHeader = () => (
  <HeaderContainer>
    <Title subtitle="Study with us!" title="함께 할 프로젝트 살펴보기" />
    <ProjectSearchOption />
  </HeaderContainer>
);

export default ProjectHeader;
