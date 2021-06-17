import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';

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
  return (
    <Container>
      <Username>{nickname}</Username>
      <ButtonGroup>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="1:1 대화"
        />
        <Button
          ButtonColor="darkblue"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="프로젝트 초대"
        />
      </ButtonGroup>
    </Container>
  );
};

export default UserInfoTop;
