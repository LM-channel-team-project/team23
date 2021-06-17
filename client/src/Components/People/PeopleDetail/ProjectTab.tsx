import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import ProjectBox from './ProjectBox';

const TabTitle = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin-top: 1rem;
`;
const CurrentProject = styled.li`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  height: auto;
  margin-bottom: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectTab = () => {
  const { project } = useSelector((state: RootState) => state.user);
  const ProjectData = project?.data.map((item) => {
    return <ProjectBox id={item} key={item} />;
  });
  console.log(ProjectData);
  return (
    <>
      <TabTitle>나의 프로젝트</TabTitle>
      <CurrentProject>{project?.data && ProjectData}</CurrentProject>
    </>
  );
};

export default ProjectTab;
