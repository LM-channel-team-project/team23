import React from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button';

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  padding: 29px 24px 16px;
`;

const Title = styled.h3`
  line-height: 1.4375rem;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.palette.lightGray};
`;

const Ul = styled.ul`
  margin-top: 16px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  & button {
    border: 1px solid ${(props) => props.theme.palette.lightGray};
    border-radius: 2px;
    transition: all 0.2s;
    &:hover {
      background-color: ${(props) => props.theme.palette.darkblue};
      color: ${(props) => props.theme.palette.white};
    }
  }
`;

const PostionText = styled.span`
  font-size: 15px;
  line-height: 1.3125rem;
  margin-right: 30px;
  width: 221px;
`;

const PositionNumber = styled.span`
  font-size: 15px;
  line-height: 1.3125rem;
  color: ${(props) => props.theme.palette.orange};
  margin-right: 34px;
`;

const Status = () => {
  return (
    <Container>
      <Title>모집 현황</Title>
      <Ul>
        <Li>
          <PostionText>프론트엔드</PostionText>
          <PositionNumber>0/3</PositionNumber>
          <Button
            ButtonColor="white"
            ButtonMode="active"
            ButtonName="지원"
            ButtonSize="medium"
          />
        </Li>
        <Li>
          <PostionText>웹서버</PostionText>
          <PositionNumber>0/3</PositionNumber>
          <Button
            ButtonColor="white"
            ButtonMode="active"
            ButtonName="지원"
            ButtonSize="medium"
          />
        </Li>
      </Ul>
    </Container>
  );
};

export default Status;
