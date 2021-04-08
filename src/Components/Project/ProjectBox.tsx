import React from 'react';
import styled from 'styled-components';

const ProjectGrid = styled.div`
  display: grid;
  grid-row-gap: 45px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 90%;
  height: 70px;
  bottom: -35px;
  left: 5%;
  padding: 10px 8px 8px 8px;
  border-radius: 8px 8px 8px 8px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 10%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  background-color: #fff;
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
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px,
    rgb(0 0 0 / 10%) 0px 20px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    ${ProjectTitle} {
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
  @media screen and (max-width: 420px) {
    width: 340px;
  }
`;

const ProjectCategory = styled.div``;

const RecruitmentStatus = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
`;

const Recruitment = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 46px 20px;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: transform 0.3s ease-in-out;
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
      transform: scale(1.1);
    }
  }
`;

const ProjectName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 8px 0;
`;

const ProjectView = () => (
  <ProjectGrid>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <RecruitmentStatus>모집중</RecruitmentStatus>
        <Recruitment>모집인원: 0/4</Recruitment>
      </ProjectThumb>
      <ProjectTitle>
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임 사이드 프로젝트</ProjectName>
      </ProjectTitle>
    </ProjectContent>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <RecruitmentStatus>모집중</RecruitmentStatus>
        <Recruitment>모집인원: 0/4</Recruitment>
      </ProjectThumb>
      <ProjectTitle>
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임 사이드 프로젝트</ProjectName>
      </ProjectTitle>
    </ProjectContent>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <RecruitmentStatus>모집중</RecruitmentStatus>
        <Recruitment>모집인원: 0/4</Recruitment>
      </ProjectThumb>
      <ProjectTitle>
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임 사이드 프로젝트</ProjectName>
      </ProjectTitle>
    </ProjectContent>
    <ProjectContent>
      <ProjectThumb>
        <Image src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png" />
        <RecruitmentStatus>모집중</RecruitmentStatus>
        <Recruitment>모집인원: 0/4</Recruitment>
      </ProjectThumb>
      <ProjectTitle>
        <ProjectCategory>[포트폴리오] 게임</ProjectCategory>
        <ProjectName>간단한 웹 게임 사이드 프로젝트</ProjectName>
      </ProjectTitle>
    </ProjectContent>
  </ProjectGrid>
);

export default ProjectView;
