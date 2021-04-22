import React from 'react';
import styled from 'styled-components';

const ProfileModalWrapper = styled.div`
  display: none;
  position: fixed;
  right: 10rem;
  top: 52px;
  background: ${(props) => props.theme.palette.white};
  width: 262px;
  box-shadow: 1px 1px 7px 3px rgb(0 0 0 / 10%),
    -1px -1px 7px 3px rgb(0 0 0 / 10%);
  border-radius: 5px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  height: 108px;
`;
// 108 35 23 75 23 45
const ProfileImg = styled.img`
  width: 108px;
  padding: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 1rem 0 1rem 0.5rem;
`;

const InfoUpper = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  & .userName {
    margin-right: 0.7rem;
  }
  & button {
    font-size: 7px;
    padding: 4px 10px;
    border: none;
    background: ${(props) => props.theme.palette.lightGray};
    color: ${(props) => props.theme.palette.white};
    border-radius: 10px;
    &:hover {
      background: ${(props) => props.theme.palette.gray};
      cursor: pointer;
    }
  }
`;

const InfoLower = styled.div`
  font-size: 12px;
`;

const BtnWrapper = styled.div`
  height: 35px;
  display: flex;
  & button {
    flex: 1;
    background: ${(props) => props.theme.palette.white};
    color: ${(props) => props.theme.palette.gray};
    font-size: 12px;
  }
  & button:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const MyInfoBtn = styled.button`
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-left: none;
  border-right: none;
`;

const NoticeBtn = styled.button`
  border: 1px solid ${(props) => props.theme.palette.gray};
`;

const SubscribeBtn = styled.button`
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-left: none;
  border-right: none;
`;

const MyProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 98px;
  font-size: 12px;
`;

const MyProjectTitle = styled.div`
  padding-left: 0.7rem;
  line-height: 2;
  background: ${(props) => props.theme.palette.lightGray};
  opacity: 0.6;
`;

const MyProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 0.7rem;
  text-align: center;
  & p {
    margin-bottom: 0.6rem;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const CreateProjectText = styled.span`
  margin-top: 12px;
  text-align: right;
  color: ${(props) => props.theme.palette.lightGray};
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const NewNoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 68px;
  font-size: 12px;
`;

const NewNoticeTitle = styled.div`
  padding-left: 0.7rem;
  line-height: 2;
  background: ${(props) => props.theme.palette.lightGray};
  opacity: 0.6;
`;

const NewNoticeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 0.7rem;
  text-align: center;
  & p {
    margin-bottom: 0.6rem;
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

function ProfileModal() {
  return (
    <ProfileModalWrapper>
      <ProfileWrapper>
        <ProfileImg
          src="http://kawala.in/assets/global/images/avatars/avatar1.png"
          alt="Avatar"
        />
        <InfoWrapper>
          <InfoUpper>
            <span className="userName">용현준</span>
            <button>로그아웃</button>
          </InfoUpper>
          <InfoLower>
            <span>본캐: </span>
            <span className="job">웹프론트엔드</span> /{' '}
            <span className="skill">초보</span>
          </InfoLower>
        </InfoWrapper>
      </ProfileWrapper>
      <BtnWrapper>
        <MyInfoBtn>내 정보</MyInfoBtn>
        <NoticeBtn>알림상세</NoticeBtn>
        <SubscribeBtn>구독</SubscribeBtn>
      </BtnWrapper>
      <MyProjectWrapper>
        <MyProjectTitle>
          내 프로젝트 <span className="projectCnt">(0)</span>
        </MyProjectTitle>
        <MyProjectContent>
          <p>프로젝트가 없습니다.</p>
          <p>프로젝트가 없습니다.</p>
          <p>프로젝트가 없습니다.</p>
          <CreateProjectText>프로젝트 만들기 &gt;</CreateProjectText>
        </MyProjectContent>
      </MyProjectWrapper>
      <NewNoticeWrapper>
        <NewNoticeTitle>
          신규 알림 <span className="noticeCnt">(0)</span>
        </NewNoticeTitle>
        <NewNoticeContent>
          <p>알림메시지가 없습니다</p>
          <p>알림메시지가 없습니다</p>
          <p>알림메시지가 없습니다</p>
        </NewNoticeContent>
      </NewNoticeWrapper>
    </ProfileModalWrapper>
  );
}

export default ProfileModal;
