import React, { useState } from 'react';
import styled from 'styled-components';
import fullHeart from '../../img/full-heart.svg';
import emptyHeart from '../../img/empty-heart.svg';
import borderHeart from '../../img/border-heart.svg';
import basicHeart from '../../img/basic-heart.svg';
import { Link } from 'react-router-dom';

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

const HeartBtn = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 15px;
  right: 20px;
  background-image: url(${emptyHeart});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &:hover {
    background-image: url(${borderHeart});
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-end;
  padding: 46px 20px;
  width: 100%;
  height: 100%;
`;

const Recruitment = styled.h4``;

const Description = styled.p`
  display: none;
`;

const FavoriteNumber = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const HeartIcon = styled.div`
  width: 12px;
  height: 11px;
  background-image: url(${basicHeart});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 5px;
`;

const FavoriteCount = styled.span``;

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
  id: number;
  title: string;
  description: string;
  image: string;
  state: Array<number>;
  category: string;
}

const ProjectBox = ({
  id,
  title,
  description,
  image,
  state,
  category,
}: IProjectProps) => {
  const checkField = (field: string) => {
    switch (field) {
      case 'F1':
        return '웹';
      case 'F2':
        return '모바일';
      case 'F3':
        return '게임';
    }
  };
  return (
    <Link to={`/project/${id}`}>
      <ProjectContent>
        <ProjectThumb>
          <Image src={image} alt="project" />
          <RecruitmentStatus>
            {state[0] >= state[1] ? '모집완료' : '모집중'}
          </RecruitmentStatus>
          <HeartBtn />
          <ProjectInfo>
            <Recruitment>
              모집인원: {state[0]}/{state[1]}
            </Recruitment>
            <Description>
              {description ? description : '프로젝트 설명이 없습니다.'}
            </Description>
            <FavoriteNumber>
              <HeartIcon />
              <FavoriteCount>0</FavoriteCount>
            </FavoriteNumber>
          </ProjectInfo>
        </ProjectThumb>
        <ProjectTitle>
          <ProjectCategory>[{checkField(category)}]</ProjectCategory>
          <ProjectName>{title}</ProjectName>
        </ProjectTitle>
      </ProjectContent>
    </Link>
  );
};

export default ProjectBox;
