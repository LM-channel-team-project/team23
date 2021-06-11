import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';

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
const button = styled.div`
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

interface IUser {
  avartarImg: string;
  nickname: string;
  position: string;
  positionLevel: string;
  interestSkills: string[];
  availableTime: string;
  availableLoc: string;
  availableWeek: string;
  receivedLike: number;
  info: string;
}

const defaultProps: IUser[] = [];

const PeopleDetailPresenter = () => {
  const url = location.href.split('/');
  const UserNickname = url.pop();

  const [user, setUser] = useState(defaultProps);

  useEffect(() => {
    axios.get(`${USER_SERVER}/show/${UserNickname}`).then((response) => {
      if (response.data.success) {
        const userDB = response.data.user;
        const data = {
          avartarImg: userDB.avartarImg
            ? userDB.avartarImg
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
          nickname: userDB.nickname,
          position: userDB.position,
          positionLevel: userDB.positionLevel,
          interestSkills: userDB.interestSkills,
          availableLoc: userDB.availableLocation,
          availableWeek: userDB.availableWeek,
          availableTime: userDB.availableTime,
          receivedLike: userDB.receivedLike,
          info: userDB.intro,
        };
        setUser([data]);
      }
    });
  }, []);

  return (
    <UserContainer>
      <ImgContainer>
        <UserImg src={user[0].avartarImg} alt="Avatar" />
      </ImgContainer>
      <UserInfo>
        <UserInfoTop>
          <Username>{user[0].nickname}</Username>
          <ButtonGroup>
            <Button
              ButtonColor="red"
              ButtonMode="active"
              ButtonSize="medium"
              ButtonName="1:1 대화"
            />
            <Button
              ButtonColor="darkblue"
              ButtonMode="active"
              ButtonSize="medium"
              ButtonName="프로젝트 초대"
            />
          </ButtonGroup>
        </UserInfoTop>
        <UserInfoMid>
          <UserJob>
            <Title>직무</Title>
            <Contents>{user[0].position}</Contents>
          </UserJob>
          <UserLearningDate>
            <Title>숙련도</Title>
            <Contents>{user[0].positionLevel}</Contents>
          </UserLearningDate>
          <UserStack>
            <Title>Stack</Title>
            <Contents>{user[0].interestSkills}</Contents>
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
};

export default PeopleDetailPresenter;
