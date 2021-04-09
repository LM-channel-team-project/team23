import React from 'react';
import styled from 'styled-components';
import ProjectSearchOption from '../../Components/Project/ProjectSearchOption';

const HeaderContainer = styled.h2`
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
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const ProjectHeader = () => (
  <HeaderContainer>
    <SmallTittle>Study with us!</SmallTittle>
    <BigTitle>함께 할 프로젝트 살펴보기</BigTitle>
    <ProjectSearchOption />
  </HeaderContainer>
);

export default ProjectHeader;
