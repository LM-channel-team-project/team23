import React from 'react';
import styled from 'styled-components';

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
  background-color: ${(props) => props.theme.palette.white};
  transition: transform 0.3s ease;
  color: ${(props) => props.theme.palette.black};
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
  cursor: pointer;
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

const ProjectInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 46px 20px;
  width: 100%;
  height: 100%;
`;

const Recruitment = styled.h4``;

const Description = styled.p`
  display: none;
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
  font-weight: bold;
  color: ${(props) => props.theme.palette.white};
  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
    ${Recruitment} {
      display: none;
    }
    ${Description} {
      display: block;
    }
  }
`;

const ProjectName = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 8px 0;
`;

interface IProjectProps {
  title: string;
  description: string;
  image: string;
  state: Array<number>;
  category: string;
}

const ProjectBox = ({
  title,
  description,
  image,
  state,
  category,
}: IProjectProps) => (
  <ProjectContent>
    <ProjectThumb>
      <Image src={image} />
      <RecruitmentStatus>
        {state[0] >= state[1] ? '모집완료' : '모집중'}
      </RecruitmentStatus>
      <ProjectInfo>
        <Recruitment>
          모집인원: {state[0]}/{state[1]}
        </Recruitment>
        <Description>
          {description.length > 40
            ? `${description.substring(0, 40)}...`
            : description}
        </Description>
      </ProjectInfo>
    </ProjectThumb>
    <ProjectTitle>
      <ProjectCategory>[포트폴리오] {category}</ProjectCategory>
      <ProjectName>{title}</ProjectName>
    </ProjectTitle>
  </ProjectContent>
);

export default ProjectBox;