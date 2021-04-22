import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  width: 100%;
  min-width: 280px;
  height: 190px;
  position: relative;
  padding: 10px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.06);
  border-top-left-radius: 20px;
`;
const UserTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-bottom: 30px solid transparent;
  border-left: 30px solid ${(props) => props.theme.palette.purple};
`;
const UserTagSpan = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  font-size: 0.4em;
  color: ${(props) => props.theme.palette.white};
`;
const UserTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const UserImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 15px;
`;
const Username = styled.div`
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
`;

const UserMid = styled.div`
  display: grid;
  grid: 1fr 1fr / auto-flow;
  grid-row-gap: 5px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid ${(props) => props.theme.palette.lightGray};
`;
const Major = styled.span`
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
`;
const MajorTitle = styled.p`
  font-weight: bold;
`;
const MajorLV = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.palette.lightGray};
`;

const UserBottom = styled.div`
  padding: 10px 0;
  font-size: 0.8em;
`;
const UserStackList = styled.div`
  color: ${(props) => props.theme.palette.darkblue};
  font-size: 0.9em;
  margin-bottom: 10px;
`;
const UserStack = styled.span`
  margin-right: 5px;
  line-height: 1.4em;
`;
const UserFooter = styled.div``;
const Like = styled.span``;

interface User {
  joinDate?: number;
  avatarImg: string;
  username: string;
  userJob: string;
  learningDate: string;
  userStack: string[];
  likeCount: number;
}

const PeopleListItem = ({
  joinDate,
  avatarImg,
  username,
  userJob,
  learningDate,
  userStack,
  likeCount,
}: User) => (
  <User>
    <UserTag></UserTag>
    <UserTagSpan>N</UserTagSpan>

    <UserTop>
      <UserImg src={avatarImg} alt="Avatar" />
      <Username>{username}</Username>
    </UserTop>
    <UserMid>
      <Major>
        <MajorTitle>[직무] {userJob}</MajorTitle>
        <MajorLV>{learningDate}</MajorLV>
      </Major>
    </UserMid>
    <UserBottom>
      <UserStackList>
        {userStack.map((stack, index) => (
          <UserStack key={index}>{stack}</UserStack>
        ))}
      </UserStackList>
      <Like>♥ {likeCount}</Like>
    </UserBottom>
  </User>
);

export default PeopleListItem;
