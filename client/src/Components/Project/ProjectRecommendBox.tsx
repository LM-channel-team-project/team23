import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 266px;
  cursor: pointer;
  margin-right: 26px;
  flex: none;
`;

const Top = styled.div`
  display: flex;
  padding-bottom: 12px;
`;

const Left = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin-right: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: normal;
`;

const ProjectName = styled.p`
  font-size: 1rem;
  line-height: 23px;
  margin-bottom: 7px;
  font-weight: 700;
  color: ${(props) => props.theme.palette.gray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ProjectSummary = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.palette.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 17px;
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Bottom = styled.div`
  padding-top: 12px;
  border-top: 1px solid ${(props) => props.theme.palette.lightGray};
`;

const Category = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.palette.gray};
  text-overflow: ellipsis;
  overflow: hidden;
`;

interface IProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectRecommendBox = ({
  title,
  description,
  image,
  category,
}: IProps) => {
  return (
    <Box>
      <Top>
        <Left>
          <Image src={image} alt="project_image" />
        </Left>
        <Right>
          <ProjectName>{title}</ProjectName>
          <ProjectSummary>{description}</ProjectSummary>
        </Right>
      </Top>
      <Bottom>
        <Category>[모집] {category}</Category>
      </Bottom>
    </Box>
  );
};

export default ProjectRecommendBox;
