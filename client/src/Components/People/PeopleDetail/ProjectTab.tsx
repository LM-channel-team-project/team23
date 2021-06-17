import React from 'react';
import styled from 'styled-components';

const TabTitle = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 20px;
`;
const CurrentProject = styled.p`
  font-size: 0.8em;
`;

const ProjectTab = () => {
  return (
    <>
      <TabTitle>나의 프로젝트</TabTitle>
      <CurrentProject>진행중인 프로젝트가 없습니다</CurrentProject>
    </>
  );
};

export default ProjectTab;
