import React from 'react';
import styled from 'styled-components';

const Friend = styled.div`
  width: 100%;
  height: 190px;
  position: relative;
  padding: 10px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.06);
  border-top-left-radius: 20px;
`;
const FriendTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-bottom: 30px solid transparent;
  border-left: 30px solid ${(props) => props.theme.palette.purple};
`;
const FriendTagSpan = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  font-size: 0.4em;
  color: ${(props) => props.theme.palette.white};
`;
const FriendTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const FriendImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 15px;
`;
const FriendUsername = styled.div`
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
`;
const FriendLV = styled.p`
  width: 45px;
  border: 1px solid ${(props) => props.theme.palette.red};
  border-radius: 10px;
  font-size: 0.8em;
  text-align: center;
  padding: 4px 0;
  color: ${(props) => props.theme.palette.red};
  margin-bottom: 5px;
`;

const FriendMid = styled.div`
  display: grid;
  grid: 1fr 1fr / auto-flow;
  grid-row-gap: 5px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid ${(props) => props.theme.palette.lightGray};
`;
const Major = styled.span`
  font-size: 0.7em;
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
const Minor = styled.span`
  font-size: 0.7em;
  display: flex;
  justify-content: space-between;
`;
const MinorTitle = styled.p`
  font-weight: bold;
`;
const MinorLV = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.palette.lightGray};
`;

const FriendBottom = styled.div`
  padding: 10px 0;
  font-size: 0.7em;
`;
const CurrentProject = styled.p`
  margin-bottom: 15px;
`;
const FriendFooter = styled.div``;
const Like = styled.span``;

const PeopleListItem = () => (
  <Friend>
    <FriendTag></FriendTag>
    <FriendTagSpan>N</FriendTagSpan>
    <FriendTop>
      <FriendImg
        src="http://kawala.in/assets/global/images/avatars/avatar9.png"
        alt="Avatar"
      />
      <FriendUsername>
        <FriendLV>L6</FriendLV>a
      </FriendUsername>
    </FriendTop>
    <FriendMid>
      <Major>
        <MajorTitle>[본캐] UI/UX 기획</MajorTitle>
        <MajorLV>중수</MajorLV>
      </Major>
      <Minor>
        <MinorTitle>[부캐] UI/UX 디자인</MinorTitle>
        <MinorLV>초보</MinorLV>
      </Minor>
    </FriendMid>
    <FriendBottom>
      <CurrentProject>진행중인 프로젝트가 0개 있습니다.</CurrentProject>
      <FriendFooter>
        <Like>♥0</Like>
      </FriendFooter>
    </FriendBottom>
  </Friend>
);

export default PeopleListItem;
