import React, { ReactElement } from 'react';
import styled from 'styled-components';
import PeopleListItem from './PeopleListItem';
import users from './userDB';

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
  width: 100%;
`;

const PeopleList = (): ReactElement => (
  <List>
    {users.map((user, index) => (
      <PeopleListItem
        key={index}
        createdAt={user.createdAt}
        avartarImg={user.avartarImg}
        nickname={user.nickname}
        position={user.position}
        positionLevel={user.positionLevel}
        interestSkills={user.interestSkills}
        receivedLike={user.receivedLike}
      />
    ))}
  </List>
);

export default PeopleList;
