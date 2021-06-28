import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PostTransfer, LevelTransfer } from '../Common/transformValue';
import fullHeart from '../../img/full-heart.svg';
import emptyHeart from '../../img/empty-heart.svg';
import borderHeart from '../../img/border-heart.svg';
import LikeButton from '../Common/LikeButton';

const User = styled.div`
  width: 100%;
  min-width: 280px;
  height: 190px;
  position: relative;
  padding: 10px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.06);
`;
// const UserTag = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 10px;
//   height: 10px;
//   border-bottom: 30px solid transparent;
//   border-left: 30px solid ${(props) => props.theme.palette.purple};
// `;
// const UserTagSpan = styled.span`
//   position: absolute;
//   top: 3px;
//   left: 3px;
//   font-size: 0.4em;
//   color: ${(props) => props.theme.palette.white};
// `;
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

const Menu = styled.ul`
  width: 100px;
  height: 100px;
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 18px;
  left: 0px;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.palette.white};
`;
const MenuItem = styled.li`
  font-size: 0.6em;
`;
const ToProfile = styled(Link)``;

const Username = styled.div`
  display: inline-block;
  position: relative;
  font-weight: bold;
  margin-bottom: 5px;
  &:hover ${Menu} {
    cursor: pointer;
    display: grid;
  }
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

const SLikeButton = styled(LikeButton)`
  width: 18px;
  height: 18px;
  top: 0;
  right: 0;
`;

const LikeIcon = styled.span`
  font-size: 1.5em;
`;

const Like = styled.span``;

interface IUser {
  avartarImg: string;
  nickname: string;
  position: string;
  positionLevel: string;
  interestSkills: string[];
  receivedLike: number;
}

const PeopleListItem = ({
  avartarImg,
  nickname,
  position,
  positionLevel,
  interestSkills,
  receivedLike,
}: IUser) => {
  const [like, setLike] = useState(receivedLike);
  return (
    <User>
      <UserTop>
        <Link to={`/people/${nickname}`}>
          <UserImg
            src={
              avartarImg
                ? avartarImg
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
            alt="Avatar"
          />
        </Link>
        <Username>
          {nickname}
          <Menu>
            <MenuItem>
              <ToProfile to={`/people/${nickname}`}>프로필</ToProfile>
            </MenuItem>
            <MenuItem>1:1 대화</MenuItem>
            <MenuItem>프로젝트 초대</MenuItem>
          </Menu>
        </Username>
      </UserTop>
      <UserMid>
        <Major>
          <MajorTitle>[직무] {PostTransfer(position)}</MajorTitle>
          <MajorLV>{LevelTransfer(positionLevel)}</MajorLV>
        </Major>
      </UserMid>
      <UserBottom>
        <UserStackList>
          {interestSkills.map((stack, index) => (
            <UserStack key={index}>{stack}</UserStack>
          ))}
        </UserStackList>
        <SLikeButton
          isProject={false}
          userId={localStorage.getItem('userId')}
          targetId={nickname}
          setLike={setLike}
        />
        <LikeIcon>❤ </LikeIcon>
        <Like>{like ? like : 0}</Like>
      </UserBottom>
    </User>
  );
};

export default PeopleListItem;
