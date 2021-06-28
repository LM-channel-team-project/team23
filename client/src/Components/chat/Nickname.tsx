import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 12px;
  width: 100%;
  padding: 1rem;
  box-shadow: 0 1px 4px #989696;
  display: flex;
  flex-direction: column;
  line-height: 1rem;
  cursor: pointer;
  p {
    font-size: 8px;
  }
`;

interface IProps {
  nickname: string;
  createAt: Date;
}

const NicknameList = ({ nickname, createAt }: IProps) => {
  const dateString = createAt.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Container>
      <h5>{nickname}</h5>
      <p>{dateString}</p>
    </Container>
  );
};

export default NicknameList;
