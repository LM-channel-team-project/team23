import React, { ReactElement } from 'react';
import styled from 'styled-components';
import users from '../userDB';
import RecommendUser from './PeopleRecommendUser';

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
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

const PeopleRecommendTable = (): ReactElement => (
  <RecommendTab>
    <RecommendTabHeader>
      [추천] 좌우 고민하지 말고 바로 이 멤버!
    </RecommendTabHeader>

    <RecommendList>
      {users.map((user, index) => (
        <RecommendUser
          key={index}
          avartarImg={user.avartarImg}
          nickname={user.nickname}
          position={user.position}
          interestSkills={user.interestSkills}
        />
      ))}
    </RecommendList>
  </RecommendTab>
);

export default PeopleRecommendTable;
