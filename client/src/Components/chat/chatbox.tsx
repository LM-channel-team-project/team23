import React from 'react';
import styled from 'styled-components';
import NicknameList from './Nickname';
import { CgProfile } from 'react-icons/cg';
import ChatContents from './chatContents';
import SendMessageBox from './sendMessageBox';

const ChatBoxContainer = styled.div`
  position: fixed;
  width: 460px;
  height: 360px;
  bottom: 100px;
  right: 100px;
  background-color: ${(props) => props.theme.palette.faintGray};
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 3px #999;
  z-index: 20;
  font-size: 24px;
  display: flex;
`;

const ListContainer = styled.div`
  width: 30%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 1px 4px #989696;
`;

const Title = styled.div`
  font-size: 14px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 1px 4px #989696;
  display: flex;
  h3 {
    margin-left: 1rem;
  }
`;

const ChatContainer = styled.div`
  width: 70%;
  height: 100%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 14px;
`;

const ChatTextContainer = styled.div`
  width: 100%;
  height: 80%;
  box-shadow: 2px 1px 4px #989696;
  overflow-y: auto;
  padding: 1rem;
`;

const Chatbox = () => {
  const today = new Date();
  return (
    <ChatBoxContainer>
      <ListContainer>
        <Title>
          <CgProfile />
          <h3>대화 목록</h3>
        </Title>
        <NicknameList nickname="주은" createAt={today} />
        <NicknameList nickname="주은" createAt={today} />
        <NicknameList nickname="주은" createAt={today} />
      </ListContainer>
      <ChatContainer>
        <ChatTextContainer>
          <ChatContents mode={true} />
          <ChatContents mode={false} />
          <ChatContents mode={true} />
          <ChatContents mode={false} />
          <ChatContents mode={true} />
          <ChatContents mode={false} />
        </ChatTextContainer>
        <SendMessageBox />
      </ChatContainer>
    </ChatBoxContainer>
  );
};

export default Chatbox;
