import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
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
import axios from 'axios';
import { PROJECT_SERVER } from '../../Config';
import { Link } from 'react-router-dom';
import { FieldTransfer } from './transformValue';

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

const ProjectContainer = styled.div`
  width: 80%;
  border-radius: 16px;
  text-align: center;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.palette.darkblue};
  margin-top: 2rem;
  margin-bottom: 2rem;
  &:hover {
    background-color: ${(props) => props.theme.palette.faintGray};
    border: 1px solid ${(props) => props.theme.palette.lightGray};
  }
`;

const TextAreaStyle = styled.input`
  border-radius: 4px;
  height: 180px;
  width: 100%;
  resize: none;
  overflow-y: auto;
  padding: 0.3rem;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;

interface IProps {
  sendNickname: string;
  contents: string;
  type: number | undefined;
}

const AlarmModalContents = ({ sendNickname, contents, type }: IProps) => {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [describe, setDescribe] = useState<string>('');
  useEffect(() => {
    if (type === 1) {
      axios.post(`${PROJECT_SERVER}/info`, { _id: contents }).then((res) => {
        if (!res.data.success) {
          alert(`프로젝트 데이터를 가져오는데 실패했습니다 (${res.data.err})`);
          return;
        }
        const { title, field, summary } = res.data.project;
        setTitle(title);
        setCategory(field);
        setDescribe(summary);
      });
    }
  }, []);
  console.log(title);
  return (
    <Container>
      <ToUserContainer>
        <h2>보낸 사람</h2>
        <input type="text" value={sendNickname} disabled />
      </ToUserContainer>
      {type === 0 ? (
        <TextAreaStyle
          placeholder="메세지를 입력해주세요"
          disabled
          value={contents}
        />
      ) : type === 1 ? (
        <ProjectContainer>
          <a href={`/project/${contents}`}>
            <p>[{FieldTransfer(category)}]</p>
            <h2>
              {title}({describe})
            </h2>
          </a>
        </ProjectContainer>
      ) : (
        <TextAreaStyle
          placeholder="메세지를 입력해주세요"
          disabled
          value={contents}
        />
      )}
      <ButtonArea>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="small"
          ButtonName="수락"
          type="button"
        />
        <Button
          ButtonColor="darkblue"
          ButtonMode="active"
          ButtonSize="small"
          ButtonName="거절"
          type="button"
        />
      </ButtonArea>
    </Container>
  );
};

export default AlarmModalContents;
