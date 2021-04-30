import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgInfo from './ImgInfo';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Container = styled.div`
  width: 95%;
  min-height: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  p {
    color: ${(props) => props.theme.palette.orange};
    font-size: 12px;
  }
  .noChange {
    background-color: ${(props) => props.theme.palette.lightGray};
    cursor: default;
    pointer-events: none;
    color: ${(props) => props.theme.palette.gray};
    padding-left: 2rem;
  }
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;
  width: 100%;
`;

const InputStyle = styled.input`
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  border-radius: 4px;
  height: 38px;
  width: 65%;
  padding: 0.5rem;
`;

const RowCenterArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.9rem;
  padding: 0.3rem;
  p {
    margin-left: 2rem;
  }
  h3 {
    font-size: 12px;
    width: 120px;
    line-height: 1.5;
    padding-top: 1rem;
    margin-top: 1rem;
  }
`;
const RowArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.9rem;
  padding: 0.3rem;
  p {
    margin-left: 2rem;
  }
  h3 {
    font-size: 0.75rem;
    width: 120px;
    line-height: 1.5;
    padding-top: 10px;
  }
  textarea {
    overflow: auto;
    width: 90%;
    height: 190px;
    border: 1px solid ${(props) => props.theme.palette.lightGray};
    border-radius: 4px;
    padding: 0.5rem;
    margin: 0.2rem;
    resize: none;
  }
`;

const InputArea = styled.div`
  width: 80%;
`;
const InfoArea = styled.div`
  width: 100%;
`;

const SelectArea = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Select = styled.select`
  width: 200px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  padding-left: 20px;
  margin-right: 15px;
  font-size: 12px;
  appearance: none;
  background-size: 10px 5px;
  background-position: 90%;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA1LjI1bC01LTVoMTBsLTUgNXoiIGZpbGw9IiM0MjQ5NUIiLz48L3N2Zz4=);
`;

const Option = styled.option`
  text-align: center;
  margin: 1.2rem;
  color: ${(props) => props.theme.palette.gray};
  padding: 0px 2px 1px;
`;

const Button = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.darkblue};
  border: 1px solid ${(props) => props.theme.palette.darkblue};
  margin: 0.6rem;
  padding: 1rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 110px;
`;

const PortFolioArea = styled.div`
  width: 100%;
  margin-left: 2rem;
  input {
    width: 90%;
    font-size: 14px;
    border: 1px solid ${(props) => props.theme.palette.lightGray};
    border-radius: 4px;
    padding: 0.5rem;
    margin-top: 0.8rem;
    height: 42px;
  }
`;

const RedBtton = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.red};
  border: 1px solid ${(props) => props.theme.palette.red};
  margin: 0.6rem;
  padding: 1rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 110px;
`;

const MiniButton = styled.button`
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.darkblue};
  border: 1px solid ${(props) => props.theme.palette.darkblue};
  margin: 0.6rem;
  padding: 0.8rem;
  font-size: 12px;
  height: 40px;
  border-radius: 4px;
  text-align: center;
  line-height: 0.5;
  width: 80px;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Pos = [
  { value: 'ios', label: 'ios' },
  { value: 'android', label: '안드로이드' },
  { value: 'frontend', label: 'FE' },
  { value: 'crossplatform', label: '크로스플랫폼' },
  { value: 'backend', label: '웹서버' },
  { value: 'blockchain', label: '블록체인' },
  { value: 'ai', label: 'AI' },
  { value: 'data', label: 'DB/빅데이터' },
  { value: 'game', label: '게임' },
];

const Level = [
  { value: 'level1', label: '초보', text: '6개월 미만으로 공부했어요.' },
  { value: 'level2', label: '중수', text: '1년 정도 공부했어요.' },
  { value: 'level3', label: '고수', text: '2년 이상 공부했어요.' },
];

const City = [
  { value: 'A0', label: '지역 무관' },
  { value: 'A1', label: '서울' },
  { value: 'A2', label: '경기' },
  { value: 'A3', label: '인천' },
  { value: 'A4', label: '대전' },
  { value: 'A5', label: '세종' },
  { value: 'A6', label: '충남' },
  { value: 'A7', label: '충북' },
  { value: 'A8', label: '광주' },
  { value: 'A9', label: '전남' },
  { value: 'A10', label: '전북' },
  { value: 'A11', label: '대구' },
  { value: 'A12', label: '경북' },
  { value: 'A13', label: '부산' },
  { value: 'A14', label: '울산' },
  { value: 'A15', label: '경남' },
  { value: 'A16', label: '강원' },
  { value: 'A17', label: '제주' },
];

const Week = [
  { value: 'W1', label: '주중/주말 모두 가능' },
  { value: 'W2', label: '주중만 가능' },
  { value: 'W3', label: '주말만 가능' },
];

const Time = [
  { value: 'T1', label: '상관없음' },
  { value: 'T2', label: '오전 위주' },
  { value: 'T3', label: '오후 위주' },
  { value: 'T4', label: '저녁 위주' },
];

const PortFolioBox = () => {
  return (
    <>
      <input type="text" placeholder="URL을 입력해주세요" />
    </>
  );
};

function ProfilePage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [pos, setPos] = useState('');
  const [level, setLevel] = useState('');
  const [levelText, setLevelText] = useState('');
  const [boxCount, setboxCount] = useState(1);

  useEffect(() => {
    //localstorage에 쿠키값 저장 된것 가져오기 => userId
    axios.post('/api/users/info', { userId: 1234 }).then((response) => {
      if (response.data.success) {
        setEmail(response.data.email);
        setNickname(response.data.nickname);
        setPos(response.data.pos);
        setLevel(response.data.level);
      } else {
        alert('내 정보를 확인하지 못했습니다.');
      }
    });
  }, []);
  const CreateBox = () => {
    setboxCount(boxCount + 1);
  };
  const handleChangeLevel = (event: React.FormEvent<HTMLSelectElement>) => {
    setLevel(event.currentTarget.value);
    const item = Level.find((item) => {
      if (item.value === event.currentTarget.value) return item;
    });
    {
      item && setLevelText(item.text);
    }
  };
  return (
    <Container>
      <ImgInfo />
      <FormArea>
        <InputArea>
          <RowArea>
            <InputStyle
              type="text"
              id="email"
              className="noChange"
              value={email}
              readOnly
            />
          </RowArea>
          <RowCenterArea>
            <InputStyle
              type="text"
              id="nickname"
              className="noChange"
              value={nickname}
              readOnly
            />
          </RowCenterArea>
          <RowArea>
            <InputStyle type="text" placeholder="010-1234-5667" />
          </RowArea>
        </InputArea>
        <InfoArea>
          <RowArea>
            <h3>직무/능력치</h3>
            <SelectArea>
              <Select name="pos" value={pos}>
                {Pos.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
              <Select name="level" onChange={handleChangeLevel} value={level}>
                {Level.map((item, index) => (
                  <Option key={index} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
              <p>{levelText}</p>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>지역 설정</h3>
            <SelectArea>
              <Select>
                {City.map((item) => (
                  <Option key={item.value}>{item.label}</Option>
                ))}
              </Select>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>시간 설정</h3>
            <SelectArea>
              <Select>
                {Week.map((item) => (
                  <Option key={item.value}>{item.label}</Option>
                ))}
              </Select>
              <Select>
                {Time.map((item) => (
                  <Option key={item.value}>{item.label}</Option>
                ))}
              </Select>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>자기 소개</h3>
            <textarea placeholder="최대 200자까지 작성 가능합니다." />
          </RowArea>
          <RowCenterArea>
            <h3>포트폴리오</h3>
            <PortFolioArea>
              {[...Array(boxCount)].map((n, index) => {
                return (
                  <span key={index}>
                    <PortFolioBox />
                  </span>
                );
              })}
            </PortFolioArea>
            <MiniButton onClick={CreateBox}>추가</MiniButton>
          </RowCenterArea>
        </InfoArea>
        <ButtonArea>
          <Button>수정하기</Button>
          <RedBtton>저장하기</RedBtton>
        </ButtonArea>
      </FormArea>
    </Container>
  );
}

export default ProfilePage;
