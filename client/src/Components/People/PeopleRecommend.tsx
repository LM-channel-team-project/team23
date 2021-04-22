import React from 'react';
import styled from 'styled-components';

const RecommendTab = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.palette.jade};
  margin-bottom: 20px;
  & > * {
    padding: 0 15px;
  }
`;
const RecommendTabHeader = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.lightJade};
  color: ${(props) => props.theme.palette.jade};
  font-weight: bold;
`;
const RecommendList = styled.ul`
  width: 100%;
  display: flex;
`;
const User = styled.li`
  width: 100%;
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
  display: grid;
`;
const UserLv = styled.div`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.palette.red};
  border-radius: 10px;
  font-size: 0.8em;
  width: 40px;
  padding: 4px 0px;
  text-align: center;
  // margin-right: 8px;
  color: ${(props) => props.theme.palette.red};
`;
const Username = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
const UserInterest = styled.p`
  color: ${(props) => props.theme.palette.lightGray};
  font-size: 0.7em;
  font-weight: bold;
  margin-bottom: 5px;
`;
const UserStack = styled.p`
  color: ${(props) => props.theme.palette.lightGray};
  font-size: 0.7em;
  font-weight: bold;
`;
const UserBottom = styled.div`
  width: 100%;
  height: 40px;
  font-size: 0.7em;
  color: ${(props) => props.theme.palette.gray};
  display: flex;
  align-items: center;
`;

const PeopleRecommend = () => (
  <RecommendTab>
    <RecommendTabHeader>
      [추천] 좌우 고민하지 말고 바로 이 멤버!
    </RecommendTabHeader>

    <RecommendList>
      <User>
        <UserTop>
          <UserImg
            src="http://kawala.in/assets/global/images/avatars/avatar1.png"
            alt="Avatar"
          />
          <Userdetail>
            <UserLv>L6</UserLv>
            <Username>allmie</Username>
            {/* 없어도 될 거 같음 user-interest */}
            {/* <UserInterest>공유 서비스, 우주/외계인, 여행..</UserInterest> */}
            <UserStack>#JAVA #서버 #WEB</UserStack>
          </Userdetail>
        </UserTop>
        <UserBottom>웹 서버, 게임 서버</UserBottom>
      </User>
    </RecommendList>
  </RecommendTab>
);

export default PeopleRecommend;
