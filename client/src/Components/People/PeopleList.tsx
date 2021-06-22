import React from 'react';
import styled from 'styled-components';
import PeopleListItem from './PeopleListItem';

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 30px 0;
  width: 100%;
`;

interface IUser {
  avartarImg?: string;
  nickname: string;
  position: string;
  positionLevel: string;
  interestSkills?: string[];
  receivedLike: number;
}

interface IProps {
  userList: Array<IUser> | null;
}

const PeopleList = ({ userList }: IProps) => {
  return (
    <List>
      {userList ? (
        userList.map((user: IUser, index: number) => (
          <PeopleListItem
            key={index}
            avartarImg={user.avartarImg}
            nickname={user.nickname}
            position={user.position}
            positionLevel={user.positionLevel}
            interestSkills={user.interestSkills}
            receivedLike={user.receivedLike}
          />
        ))
      ) : (
        <div> 정보가 없습니다. </div>
      )}
    </List>
  );
};

export default PeopleList;
