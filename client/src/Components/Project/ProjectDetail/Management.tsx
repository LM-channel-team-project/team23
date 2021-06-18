import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import Button from '../../../Components/Common/Button';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { MANAGE_SERVER } from '../../../Config';

const Container = styled.div``;
const Section = styled.section`
  margin-bottom: 5rem;
`;
const Title = styled.h3`
  line-height: 1.4375rem;
  font-size: 1.375rem;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.palette.lightGray};
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  projectId: string;
}

function Management({ projectId }: IProps) {
  const history = useHistory();
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    axios
      .post(`${MANAGE_SERVER}/deleteProject`, { pid: projectId })
      .then((res) => {
        if (!res.data.success) {
          alert(`프로젝트 삭제를 실패했습니다 (${res.data.err})`);
          return;
        }
        alert('프로젝트 삭제 완료');
        history.push('/');
      });
  };

  return (
    <Container>
      <Section>
        <Title>지원현황</Title>
        <UserInfo
          avatarImg="http://kawala.in/assets/global/images/avatars/avatar1.png"
          isAdd={true}
          isRemove={true}
          nickName="User1"
          pos="백엔드"
          posLv="초보"
          reason="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
        />
        <UserInfo
          avatarImg="http://kawala.in/assets/global/images/avatars/avatar2.png"
          isAdd={true}
          isRemove={true}
          nickName="User2"
          pos="IOS"
          posLv="초보"
          reason="열심히 할게요"
        />
      </Section>
      <Section>
        <Title>현재멤버</Title>
        <UserInfo
          avatarImg="http://kawala.in/assets/global/images/avatars/avatar3.png"
          isAdd={false}
          isRemove={true}
          nickName="User3"
          pos="안드로이드"
        />
        <UserInfo
          avatarImg="http://kawala.in/assets/global/images/avatars/avatar4.png"
          isAdd={false}
          isRemove={true}
          nickName="User4"
          pos="웹프론트엔드"
        />
      </Section>
      <Section>
        <BtnBox>
          <Button
            ButtonName="프로젝트 삭제"
            ButtonSize="medium"
            ButtonColor="darkblue"
            ButtonMode="active"
            onClick={handleDelete}
          />
          <Link to={`/updateProject/${projectId}`}>
            <Button
              ButtonName="프로젝트 수정"
              ButtonSize="medium"
              ButtonColor="red"
              ButtonMode="active"
            />
          </Link>
        </BtnBox>
      </Section>
    </Container>
  );
}

export default Management;
