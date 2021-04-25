import React from 'react';
import styled from 'styled-components';
import { AiOutlineMessage, AiFillMessage } from 'react-icons/ai';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.lightGray};
  height: 75px;
  display: flex;
  &:hover {
    background-color: ${(props) => props.theme.palette.lightGray};
    color: ${(props) => props.theme.palette.faintGray};
    cursor: pointer;
  }
`;

const VisitedContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.palette.lightGray};
  color: ${(props) => props.theme.palette.lightGray};
  height: 75px;
  display: flex;
  &:hover {
    background-color: ${(props) => props.theme.palette.lightGray};
    color: ${(props) => props.theme.palette.faintGray};
    cursor: pointer;
  }
`;

const IconArea = styled.div`
  padding: 0.2rem 0.8rem;
  margin: 0.3rem;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  h2 {
    padding: 0.2rem 0;
    font-size: 18px;
  }
  p {
    font-size: 10px;
  }
`;

interface Visited {
  visited: boolean;
}

const alarmBox = ({ visited }: Visited) => {
  console.log(visited);
  return (
    <>
      {visited ? (
        <VisitedContainer>
          <IconArea>
            <AiOutlineMessage size="34" />
          </IconArea>
          <TextArea>
            <h2>[프로젝트] TO_DO_LIST 정리 수정</h2>
            <p>읽음</p>
          </TextArea>
        </VisitedContainer>
      ) : (
        <Container>
          <IconArea>
            <AiFillMessage size="34" />
          </IconArea>
          <TextArea>
            <p>새로운 알림 메세지가 있습니다.</p>
            <h2>[쪽지]안녕하세요. 프로필 보고 연락드려요.</h2>
            <p>2일전</p>
          </TextArea>
        </Container>
      )}
    </>
  );
};

export default alarmBox;
