import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div<{ mode: boolean }>`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.mode && 'flex-end'};
`;

const Nickname = styled.p`
  font-size: 8px;
  margin-bottom: 0.4rem;
  margin-left: 0.2rem;
  font-weight: bolder;
`;

const Contents = styled.div<{ mode: boolean }>`
  width: 65%;
  height: auto;
  background-color: ${(props) => props.theme.palette.darkblue};
  color: ${(props) => props.theme.palette.white};
  padding: 1rem;
  border-radius: 40px;
  font-size: 11px;
  ${(props) =>
    props.mode &&
    css`
      background-color: ${(props) => props.theme.palette.orange};
      color: ${(props) => props.theme.palette.white};
    `}
`;

//mode true = 내가 보낸 것
//mode false = 남이 보낸 것
interface IProp {
  mode: boolean;
}
const ChatContents = ({ mode }: IProp) => {
  return (
    <Container mode={mode}>
      <Nickname>닉네임</Nickname>
      <Contents mode={mode}>텍스트 내용</Contents>
    </Container>
  );
};

export default ChatContents;
