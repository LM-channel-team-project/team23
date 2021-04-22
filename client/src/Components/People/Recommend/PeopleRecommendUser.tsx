import React from 'react';
import styled from 'styled-components';

const User = styled.li`
  width: 100%;
  max-width: 200px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const UserTop = styled.div`
  height: 90px;
  display: flex;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray};
`;
const UserImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Userdetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 120px;
`;
const Username = styled.p`
  font-weight: bold;
  margin: 5px 0 8px 0;
`;
const UserStackList = styled.p`
  color: ${(props) => props.theme.palette.lightGray};
  font-size: 0.6em;
  font-weight: bold;
`;
const UserStack = styled.span`
  margin-right: 5px;
  line-height: 1.4em;
`;
const UserBottom = styled.div`
  width: 100%;
  height: 40px;
  font-size: 0.7em;
  color: ${(props) => props.theme.palette.gray};
  display: flex;
  align-items: center;
`;

interface User {
  avatarImg: string;
  username: string;
  userStack: string[];
  userJob: string;
}

const RecommendUser = ({ avatarImg, username, userStack, userJob }: User) => (
  <User>
    <UserTop>
      <UserImg src={avatarImg} alt="Avatar" />
      <Userdetail>
        <Username>{username}</Username>
        <UserStackList>
          {userStack.map((stack, index) => (
            <UserStack key={index}>{stack}</UserStack>
          ))}
        </UserStackList>
      </Userdetail>
    </UserTop>
    <UserBottom>{userJob}</UserBottom>
  </User>
);

export default RecommendUser;
