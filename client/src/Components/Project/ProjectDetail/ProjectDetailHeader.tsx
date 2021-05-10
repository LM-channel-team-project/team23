import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  padding: 40px 0 44px;
`;

const CategoryWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 28px;
`;

const Category = styled.div`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 2px;
  border: 1px solid #c5e4ea;
  background-color: rgba(237, 246, 248, 0.4);
  color: #5fafc1;
  font-size: 14px;
  line-height: 15px;
`;

const HeaderContents = styled.div`
  max-width: 1040px;
  margin: 0 auto;
`;

const ProjectTitle = styled.h3`
  text-align: center;
  color: #222;
  font-size: 34px;
  font-weight: 700;
  line-height: 34px;
`;

const LeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 12px;
`;

const UserIdWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LeaderImageWrap = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 100px;
  overflow: hidden;
`;

const LeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

const UserIdText = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 11.5px;
  margin-right: 6.5px;
`;

const StatusTagWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const StatusTag = styled.span`
  line-height: 1.5;
  background-color: #a06bff;
  padding: 3px 9px;
  color: ${(props) => props.theme.palette.white};
  border-radius: 100px;
  font-size: 0.7rem;
`;

const ProjectDetailHeader = () => {
  return (
    <HeaderWrap>
      <CategoryWrap>
        <Category>게임</Category>
      </CategoryWrap>
      <HeaderContents>
        <ProjectTitle>간단한 웹 게임 사이드 프로젝트</ProjectTitle>
        <LeaderWrap>
          <UserIdWrap>
            <LeaderImageWrap>
              <LeaderImage src="https://letspl.me/assets/images/prof-no-img.png"></LeaderImage>
            </LeaderImageWrap>
            <UserIdText>yongveloper</UserIdText>
          </UserIdWrap>
        </LeaderWrap>
        <StatusTagWrap>
          <StatusTag>모집 중</StatusTag>
        </StatusTagWrap>
      </HeaderContents>
    </HeaderWrap>
  );
};

export default ProjectDetailHeader;
