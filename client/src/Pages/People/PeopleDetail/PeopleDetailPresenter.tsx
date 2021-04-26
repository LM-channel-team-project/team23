import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding-top: 30px;
  display: flex;
`;
const ImgContainer = styled.div`
  width: 400px;
  text-align: center;
`;
const UserImg = styled.img`
  width: 190px;
  height: 150px;
`;
const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const UserInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Username = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  width: 100px;
  height: 30px;
  font-size: 0.7em;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.white};
  &:first-child {
    background-color: ${(props) => props.theme.palette.orange};
  }
  &:last-child {
    background-color: ${(props) => props.theme.palette.jade};
  }
`;
const UserInfoMid = styled.div`
  &,
  & > * {
    display: flex;
  }
  flex-direction: column;
  gap: 15px;
`;
const UserJob = styled.div``;
const UserLearningDate = styled.div``;
const UserStack = styled.div``;
const UserInfoTable = styled.ul`
  flex-direction: column;
  padding: 15px 25px;
  gap: 10px;
  background-color: ${(props) => props.theme.palette.morelightGray};
`;
const UserInfoItem = styled.li`
  display: flex;
`;
const UserIntro = styled.div``;
const Title = styled.div`
  width: 150px;
  min-width: 150px;
  font-size: 0.8em;
  color: ${(props) => props.theme.palette.darkblue};
`;
const Contents = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.palette.black};
`;

const ProjectTab = styled.div``;
const TabTitle = styled.p`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 20px;
`;
const CurrentProject = styled.p`
  font-size: 0.8em;
`;

const PeopleDetailPresenter = () => (
  <UserContainer>
    <ImgContainer>
      <UserImg
        src="http://kawala.in/assets/global/images/avatars/avatar4.png"
        alt="Avatar"
      />
    </ImgContainer>
    <UserInfo>
      <UserInfoTop>
        <Username>allmie</Username>
        <ButtonGroup>
          <Button>1:1 대화</Button>
          <Button>프로젝트 초대</Button>
        </ButtonGroup>
      </UserInfoTop>
      <UserInfoMid>
        <UserJob>
          <Title>직무</Title>
          <Contents>프론트엔드</Contents>
        </UserJob>
        <UserLearningDate>
          <Title>숙련도</Title>
          <Contents>6개월</Contents>
        </UserLearningDate>
        <UserStack>
          <Title>Stack</Title>
          <Contents>React, NodeJS, javascript</Contents>
        </UserStack>
        <UserInfoTable>
          <UserInfoItem>
            <Title>온/오프라인</Title>
            <Contents>모두 가능</Contents>
          </UserInfoItem>
          <UserInfoItem>
            <Title>장소</Title>
            <Contents>서울</Contents>
          </UserInfoItem>
          <UserInfoItem>
            <Title>모임 시간</Title>
            <Contents>주중, 주말</Contents>
          </UserInfoItem>
        </UserInfoTable>
        <UserIntro>
          <Title>소개</Title>
          <Contents>
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          </Contents>
        </UserIntro>
      </UserInfoMid>
      <ProjectTab>
        <TabTitle>나의 프로젝트</TabTitle>
        <CurrentProject>진행중인 프로젝트가 없습니다</CurrentProject>
      </ProjectTab>
    </UserInfo>
  </UserContainer>
);

export default PeopleDetailPresenter;
