import React from 'react';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: transform 0.1s ease-in-out;
`;

const ProjectContent = styled.div`
  max-width: 384px;
  width: 100%;
  margin-bottom: 40px;
`;

const ProjectCategory = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px 20px;
`;

const ProjectName = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 46px 20px;
  width: 100%;
  height: 218px;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.125rem;
`;

const ProjectThumb = styled.div`
  position: relative;
  height: 218px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  &:hover {
    ${Image} {
      transform: scale(1.06);
    }
  }
`;

const Recruitment = styled.div`
  padding: 10px 8px 8px 8px;
  border-radius: 0 0 8px 8px;
  background-color: #eae6e6;
`;

const ProjectView = () => (
  <ProjectGrid>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임</ProjectName>
      </ProjectThumb>
      <Recruitment>모집인원: 0/4</Recruitment>
    </ProjectContent>
  </ProjectGrid>
);

export default ProjectView;
