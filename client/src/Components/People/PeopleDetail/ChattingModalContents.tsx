import React from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  padding: 2rem 1.2rem;
  align-items: center;
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

const TextAreaStyle = styled.textarea`
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
  return (
    <Container>
      <ToUserContainer>
        <h2>받는 사람</h2>
        <input type="text" value={nickname} disabled />
      </ToUserContainer>
      <TextAreaStyle placeholder="메세지를 입력해주세요" />
      <Button
        ButtonColor="red"
        ButtonMode="active"
        ButtonSize="medium"
        ButtonName="보내기"
      />
    </Container>
  );
};

export default ChattingModalContents;
