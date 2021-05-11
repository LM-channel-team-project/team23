import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ImgInfo from './ImgInfo';
import axios from 'axios';
import SelectBox from '../Common/SelectBox';
import Button from '../Common/Button';
import InputBox from '../Common/InputBox';
import { LevelData } from '../../Components/Common/OptionData';

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
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 2rem;
  width: 100%;
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
  input {
    margin-left: 0;
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
    min-width: 120px;
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
  input {
    margin-left: 0;
  }
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
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function ProfilePage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [tel, setTel] = useState('');
  const [pos, setPos] = useState('');
  const [interest, setInterest] = useState('');
  const [level, setLevel] = useState('');
  const [levelText, setLevelText] = useState('');
  const [availableLocation, setAvailableLocation] = useState('');
  const [availableWeek, setAvailableWeek] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const [avartarImg, setAvartarImg] = useState('');
  const [url, setUrl] = useState('');
  const [portfolioes, setPortfolioes] = useState([{ id: 1, url: '' }]);
  const [intro, setIntro] = useState('');

  const nextId = useRef(0);
  useEffect(() => {
    axios
      .post('/api/users/info', { _id: '6092bfdf96b9743b04a28c8b' })
      .then((response) => {
        if (response.data.success) {
          const user = response.data.user;
          setAvailableLocation(user.availableLocation);
          setAvailableTime(user.availableTime);
          setAvailableWeek(user.availableWeek);
          setEmail(user.email);
          setIntro(user.intro);
          setNickname(user.nickname);
          const urls = user.portfolio;
          setPortfolioes(
            urls.map((item: string, index: number) => {
              return { id: index, url: item };
            })
          );
          setPos(user.position);
          setLevel(user.positionLevel);
          setTel(user.tel);
        } else {
          alert('정보를 불러오는데 실패했습니다. 다시 시도해주세요.');
        }
      });
  }, []);

  nextId.current += portfolioes.length;

  useEffect(() => {
    const Item = LevelData.find((item) => item.value === level && item);
    {
      Item && setLevelText(Item.text);
    }
  }, [level]);

  const CreateBox = () => {
    const URL = {
      id: nextId.current,
      url: url,
    };
    setPortfolioes(portfolioes.concat(URL));
    console.log(URL);
    console.log(portfolioes);
    setUrl('');
    nextId.current += 1;
  };

  const handleChangeIntro = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setIntro(event.currentTarget.value);
  };

  const onSubmit = () => {
    const urls = portfolioes.map((item, index) => item.url);
    const formdata = {
      _id: '6092bfdf96b9743b04a28c8b',
      tel: tel,
      position: pos,
      positionLevel: level,
      availableLocation: availableLocation,
      availableWeek: availableWeek,
      availableTime: availableTime,
      avartarImg: avartarImg,
      portfolio: urls,
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
            <InputBox
              InputBoxSize="m"
              InputBoxType="disabled"
              SubmitValue={setEmail}
              value={email}
              readOnly
            />
          </RowArea>
          <RowCenterArea>
            <InputBox
              InputBoxSize="m"
              InputBoxType="disabled"
              SubmitValue={setNickname}
              value={nickname}
              readOnly
            />
          </RowCenterArea>
          <RowArea>
            <InputBox
              InputBoxSize="m"
              InputBoxType="active"
              SubmitValue={setTel}
              value={tel}
              placeholder="010-1122-3344"
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
            <h3>관심 분야</h3>
            <InputArea>
              <InputBox
                InputBoxSize="l"
                InputBoxType="active"
                placeholder="ex) react, vue ..."
                value={interest}
                SubmitValue={setInterest}
              />
            </InputArea>
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
              {portfolioes.map((item, index) => {
                return (
                  <div key={index}>
                    <InputBox
                      InputBoxSize="xl"
                      InputBoxType="active"
                      placeholder="URL을 입력헤주세요"
                      value={item.url}
                      SubmitValue={setUrl}
                    />
                  </div>
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
            onClick={onSubmit}
          />
        </ButtonArea>
      </FormArea>
    </Container>
  );
}

export default ProfilePage;
