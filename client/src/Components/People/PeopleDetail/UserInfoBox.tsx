import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import {
  PostTransfer,
  LocationTransfer,
  WeekTransfer,
  TimeTransfer,
  LevelTransfer,
} from '../../Common/transformValue';

const UserInfoMid = styled.div`
  &,
  & > * {
    display: flex;
  }
  flex-direction: column;
  gap: 15px;
`;
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

const UserInfoBox = () => {
  const { data } = useSelector((state: RootState) => state.user);
  return (
    <UserInfoMid>
      <div>
        <Title>직무</Title>
        <Contents>{PostTransfer(data?.user.position)}</Contents>
      </div>
      <div>
        <Title>숙련도</Title>
        <Contents>{LevelTransfer(data?.user.positionLevel)}</Contents>
      </div>
      <div>
        <Title>Stack</Title>
        <Contents>{data?.user.interestSkills?.join('  ')}</Contents>
      </div>
      <UserInfoTable>
        <UserInfoItem>
          <Title>장소</Title>
          <Contents>{LocationTransfer(data?.user.availableLocation)}</Contents>
        </UserInfoItem>
        <UserInfoItem>
          <Title>요일</Title>
          <Contents>{WeekTransfer(data?.user.availableWeek)}</Contents>
        </UserInfoItem>
        <UserInfoItem>
          <Title>모임 시간</Title>
          <Contents>{TimeTransfer(data?.user.availableTime)}</Contents>
        </UserInfoItem>
      </UserInfoTable>
      <UserIntro>
        <Title>소개</Title>
        <Contents>{data?.user.intro}</Contents>
      </UserIntro>
    </UserInfoMid>
  );
};

export default UserInfoBox;
