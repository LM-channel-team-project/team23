import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { USER_SERVER } from '../../Config';
import { GoogleLogout } from 'react-google-login';
import { GOOGLE_CLINET_ID } from '../../Config';
import { useDispatch } from 'react-redux';
import { getAuthThunk } from '../../modules/auth';
import { AlarmTransfer, IAlarm } from './PersonalAlarmData';
import SimpleModal from './SimpleModal';
import {
  PostTransfer,
  LevelTransfer,
  LevelTextTransfer,
} from './transformValue';
import AlarmModalContents from './AlarmModalContents';

const ProfileModalWrapper = styled.div`
  display: block;
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

const ProjectContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
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

const Smallp = styled.p`
  font-size: 9px;
  color: ${(props) => props.theme.palette.orange};
  margin-top: 0.3rem;
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

interface Iprops extends RouteComponentProps {
  name: string;
  level: string;
  pos: string;
  joinData: Array<any> | undefined;
  alarm: Array<IAlarm> | undefined;
  avartarImg: string;
  setLoginSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProfileModal({
  name,
  level,
  pos,
  alarm,
  joinData,
  avartarImg,
  history,
  setLoginSuccess,
}: Iprops) {
  const dispatch = useDispatch();
  const LogoutButton = () => {
    localStorage.removeItem('userId');
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.data.success) {
        alert('로그아웃 되었습니다.');
        setLoginSuccess(false);
        dispatch(getAuthThunk());
        history.push('/');
      } else {
        alert('다시 시도해주세요.');
      }
    });
  };
  const [open, setOpen] = useState<boolean>(false);
  const [sendNickname, setSendNickname] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [type, setType] = useState<number>();
  const handleOnChange = () => {
    setOpen(!open);
  };
  const showAlarmInfo = (
    sendNickname: string,
    contents: string,
    type: number
  ) => {
    setOpen(true);
    setSendNickname(sendNickname);
    setContents(contents);
    setType(type);
  };
  return (
    <ProfileModalWrapper>
      <ProfileWrapper>
        <ProfileImg src={avartarImg} alt="Avatar" />
        <InfoWrapper>
          <InfoUpper>
            <span className="userName">{name}</span>
            <GoogleLogout
              clientId={GOOGLE_CLINET_ID}
              onLogoutSuccess={LogoutButton}
              render={(renderProps) => (
                <button onClick={LogoutButton}>로그아웃</button>
              )}
            />
          </InfoUpper>
          <InfoLower>
            <span>본캐: </span>
            <span className="job">{PostTransfer(pos)}</span> /{' '}
            <span className="skill">{LevelTransfer(level)}</span>
          </InfoLower>
          <Smallp>{LevelTextTransfer(level)}</Smallp>
        </InfoWrapper>
      </ProfileWrapper>
      <BtnWrapper>
        <MyInfoBtn onClick={() => history.push('/my')}>
          <Link to="/my">내 정보</Link>
        </MyInfoBtn>
        <NoticeBtn onClick={() => history.push('/my?tab=alarm')}>
          <Link to="/my?tab=alarm">알림상세</Link>
        </NoticeBtn>
        <SubscribeBtn onClick={() => history.push('/my?tab=favorite')}>
          <Link to="/my?tab=favorite">구독</Link>
        </SubscribeBtn>
      </BtnWrapper>
      <MyProjectWrapper>
        <MyProjectTitle>
          내 프로젝트
          <span className="projectCnt">({joinData && joinData.length})</span>
        </MyProjectTitle>
        <MyProjectContent>
          {joinData &&
            joinData.map((item, index) => (
              <ProjectContainer key={index}>
                <Link to={`/project/${item._id}`}>{item.title}</Link>
              </ProjectContainer>
            ))}
          <CreateProjectText>
            <Link to="/BuildProject">프로젝트 만들기 &gt;</Link>
          </CreateProjectText>
        </MyProjectContent>
      </MyProjectWrapper>
      <NewNoticeWrapper>
        <NewNoticeTitle>
          신규 알림
          <span className="noticeCnt">({alarm && alarm.length})</span>
        </NewNoticeTitle>
        <NewNoticeContent>
          {alarm &&
            alarm.map((item, index) => (
              <p
                key={index}
                onClick={() =>
                  showAlarmInfo(
                    item.senderId.nickname,
                    item.Contents,
                    item.type
                  )
                }
              >
                {item.senderId.nickname} 님께 {AlarmTransfer(item.type)}
              </p>
            ))}
          <SimpleModal open={open} onToggle={handleOnChange}>
            <AlarmModalContents
              sendNickname={sendNickname}
              contents={contents}
              type={type}
            />
          </SimpleModal>
        </NewNoticeContent>
      </NewNoticeWrapper>
    </ProfileModalWrapper>
  );
}

export default withRouter(ProfileModal);
