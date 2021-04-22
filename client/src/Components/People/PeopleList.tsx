import React from 'react';
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

const PeopleList = () => (
  <List>
    {users.map((user, index) => (
      <PeopleListItem
        key={index}
        joinDate={user.joinDate}
        avatarImg={user.avatarImg}
        username={user.username}
        userJob={user.userJob}
        learningDate={user.learningDate}
        userStack={user.userStack}
        likeCount={user.likeCount}
      />
    ))}
  </List>
);

export default PeopleList;
