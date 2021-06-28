import React from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
`;

const InputArea = styled.input`
  width: 75%;
  text-align: center;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
`;

const SendButton = styled.button`
  width: 25%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.orange};
  border: none;
  box-shadow: 2px 1px 4px #989696;
  border-bottom-right-radius: 4px;
  color: ${(props) => props.theme.palette.white};
  font-size: 20px;
  cursor: pointer;
`;

const SendMessageBox = () => {
  return (
    <Container>
      <InputArea placeholder="메세지를 입력해주세요." />
      <SendButton>
        <FiSend />
      </SendButton>
    </Container>
  );
};

export default SendMessageBox;
