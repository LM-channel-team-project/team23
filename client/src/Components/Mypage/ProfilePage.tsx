import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgInfo from './ImgInfo';
import axios from 'axios';
import SelectBox from '../Common/SelectBox';
import Button from '../Common/Button';

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

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PortFolioBox = ({ portfolio, change, index }: any) => {
  const [url, setUrl] = useState(portfolio);
  const handleChangePortfolio = (event: React.FormEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
    change(index, event.currentTarget.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="URL을 입력해주세요"
        onChange={handleChangePortfolio}
        value={url}
      />
    </>
  );
};

function ProfilePage() {
  const [email, setEmail] = useState('abc@naver.com');
  const [nickname, setNickname] = useState('도레미');
  const [tel, setTel] = useState('010-1122-3344');
  const [pos, setPos] = useState('ai');
  const [level, setLevel] = useState('level2');
  const [levelText, setLevelText] = useState('');
  const [availableLocation, setAvailableLocation] = useState('A7');
  const [availableWeek, setAvailableWeek] = useState('W2');
  const [availableTime, setAvailableTime] = useState('T2');
  const [avartarImg, setAvartarImg] = useState('');
  const [boxCount, setboxCount] = useState(1);
  const [portfolioes, setPortfolioes] = useState(['']);
  const [intro, setIntro] = useState('');

  const CreateBox = () => {
    setboxCount(boxCount + 1);
    setPortfolioes([...portfolioes, '']);
  };
  const setPortfolio = (index: number, newItem: string) => {
    const newPortfolioes = portfolioes.map((item, i) => {
      if (index === i) return newItem;
      return item;
    });
    setPortfolioes(newPortfolioes);
  };
  const handleChangeTel = (event: React.FormEvent<HTMLInputElement>) => {
    setTel(event.currentTarget.value);
  };
  const handleChangeIntro = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setIntro(event.currentTarget.value);
  };
  const onSubmit = () => {
    const formdata = {
      _id: '6092bfdf96b9743b04a28c8b',
      tel: tel,
      position: pos,
      positionLevel: level,
      availableLocation: availableLocation,
      availableWeek: availableWeek,
      availableTime: availableTime,
      avartarImg: avartarImg,
      portfolio: portfolioes,
      intro: intro,
    };
    axios.post('/api/users/update', formdata).then((response) => {
      if (response.data.success) {
        alert('내 정보를 성공적으로 수정했습니다.');
      } else {
        alert('저장에 실패했습니다. 다시 시도해주세요.');
      }
    });
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
            <InputStyle
              type="text"
              placeholder="010-1234-5667"
              value={tel}
              onChange={handleChangeTel}
            />
          </RowArea>
        </InputArea>
        <InfoArea>
          <RowArea>
            <h3>직무/능력치</h3>
            <SelectArea>
              <SelectBox Mode="pos" DefaultValue={pos} SubmitValue={setPos} />
              <SelectBox
                Mode="level"
                DefaultValue={level}
                SubmitValue={setLevel}
              />
              <p>{levelText}</p>
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>지역 설정</h3>
            <SelectArea>
              <SelectBox
                Mode="location"
                DefaultValue={availableLocation}
                SubmitValue={setAvailableLocation}
              />
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>시간 설정</h3>
            <SelectArea>
              <SelectBox
                Mode="availableWeek"
                DefaultValue={availableWeek}
                SubmitValue={setAvailableWeek}
              />
              <SelectBox
                Mode="availableTime"
                DefaultValue={availableTime}
                SubmitValue={setAvailableTime}
              />
            </SelectArea>
          </RowArea>
          <RowArea>
            <h3>자기 소개</h3>
            <textarea
              value={intro}
              onChange={handleChangeIntro}
              placeholder="최대 200자까지 작성 가능합니다."
            />
          </RowArea>
          <RowCenterArea>
            <h3>포트폴리오</h3>
            <PortFolioArea>
              {[...Array(boxCount)].map((n, index) => {
                return (
                  <span key={index}>
                    <PortFolioBox
                      portfolio={portfolioes[index]}
                      change={setPortfolio}
                      index={index}
                    />
                  </span>
                );
              })}
            </PortFolioArea>
            <Button
              ButtonColor="darkblue"
              ButtonSize="small"
              ButtonName="추가"
              ButtonMode="active"
              onClick={CreateBox}
            />
          </RowCenterArea>
        </InfoArea>
        <ButtonArea>
          <Button
            ButtonColor="red"
            ButtonSize="medium"
            ButtonMode="active"
            ButtonName="저장하기"
          />
        </ButtonArea>
      </FormArea>
    </Container>
  );
}

export default ProfilePage;
