import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import SimpleModal from '../../Common/SimpleModal';
import ChattingModalContents from './ChattingModalContents';
import ProjectInvitedContents from './ProjectInvitedContents';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Username = styled.p`
  font-size: 1.5em;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

interface IProps {
  nickname: string;
}

const UserInfoTop = ({ nickname }: IProps) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  // if (!auth.data?.isAuth) {
  //   alert('로그인 후 사용 할 수 있는 기능입니다.');
  // }
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const handleOnChange = () => {
    setOpen(!open);
  };
  const ChattingModalOpen = () => {
    setOpen(!open);
    setMode(true);
  };
  const ProjectInvitedModalOpen = () => {
    setOpen(!open);
    setMode(false);
  };
  return (
    <Container>
      <Username>{nickname}</Username>
      <ButtonGroup>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="1:1 대화"
          onClick={ChattingModalOpen}
        />
        <Button
          ButtonColor="darkblue"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="프로젝트 초대"
          onClick={ProjectInvitedModalOpen}
        />
      </ButtonGroup>
      <SimpleModal open={open} onToggle={handleOnChange}>
        {mode ? (
          <ChattingModalContents nickname={nickname} />
        ) : (
          <ProjectInvitedContents />
        )}
      </SimpleModal>
    </Container>
  );
};

export default UserInfoTop;
