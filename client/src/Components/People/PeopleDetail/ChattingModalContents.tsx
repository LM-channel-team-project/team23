import React from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';
import useCreateAlarm from '../../../hook/useCreateAlarm';
import useInput from '../../../hook/useInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 320px;
  border-radius: 15px;
  padding: 2rem;
  padding-top: 4rem;
  align-items: center;
  background-color: ${(props) => props.theme.palette.white};
`;

const ToUserContainer = styled.div`
  display: flex;
  h2 {
    margin-left: 2rem;
    margin-right: 2rem;
    line-height: 1.5rem;
  }
  input {
    text-align: center;
    border-radius: 4px;
    padding: 0.2rem;
  }
  margin-bottom: 1rem;
`;

const TextAreaStyle = styled.input`
  border-radius: 4px;
  height: 180px;
  width: 100%;
  resize: none;
  overflow-y: auto;
  padding: 0.3rem;
`;

interface IProps {
  nickname: string;
}

const ChattingModalContents = ({ nickname }: IProps) => {
  const { sendMessage } = useCreateAlarm({
    receivedNickname: nickname,
    type: 0,
  });
  const { value, onChange } = useInput('');
  const SendMessage = () => {
    sendMessage(value);
  };
  return (
    <Container>
      <ToUserContainer>
        <h2>받는 사람</h2>
        <input type="text" value={nickname} disabled />
      </ToUserContainer>
      <TextAreaStyle
        placeholder="메세지를 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <Button
        ButtonColor="red"
        ButtonMode="active"
        ButtonSize="medium"
        ButtonName="보내기"
        onClick={SendMessage}
        type="button"
      />
    </Container>
  );
};

export default ChattingModalContents;
