import React from 'react';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Recruitment = styled.div`
  position: absolute;
  width: 90%;
  height: 50px;
  bottom: -20px;
  left: 5%;
  padding: 10px 8px 8px 8px;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0 8px 8px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 10%);
  background-color: #eae6e6;
  transition: transform 0.3s ease;
`;

const ProjectContent = styled.div`
  position: relative;
  max-width: 384px;
  width: 100%;
  height: 220px;
  margin: 0 auto;
  margin-bottom: 40px;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgb(50 50 93 / 25%), 0 1px 3px rgb(0 0 0 / 10%);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    ${Recruitment} {
      transform: translateY(-5px);
    }
  }
  @media screen and (max-width: 1150px) {
    width: 330px;
  }
  @media screen and (max-width: 1024px) {
    width: 240px;
  }
  @media screen and (max-width: 750px) {
    width: 340px;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 500px;
  }
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
  height: 100%;
  font-size: 1.125rem;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: transform 0.1s ease-in-out;
`;

const ProjectThumb = styled.div`
  position: relative;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px 8px 8px 8px;
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

const ProjectView = () => (
  <ProjectGrid>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임</ProjectName>
      </ProjectThumb>
    </ProjectContent>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임</ProjectName>
      </ProjectThumb>
      <Recruitment>모집인원: 0/4</Recruitment>
    </ProjectContent>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임</ProjectName>
      </ProjectThumb>
      <Recruitment>모집인원: 0/4</Recruitment>
    </ProjectContent>
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
