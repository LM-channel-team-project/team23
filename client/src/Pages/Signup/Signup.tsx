import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../../Components/Common/Title';
import axios from 'axios';

const SignupSection = styled.section`
  .signupWrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 530px;
    padding: 80px 0 140px;

    .formWrapper {
      margin-top: 28px;
    }
  }
`;

const SignupForm = styled.form`
  padding: 0.2rem;

  li {
    display: flex;
    margin-bottom: 10px;
  }

  li label {
    padding-top: 10px;
    font-size: 11px;
    width: 95px;
    color: ${(props) => props.theme.palette.gray};
    line-height: 1.5;
  }

  li .inputWrapper {
    padding-bottom: 20px;
    width: 414px;
    #email {
      width: 49%;
      height: 40px;
      padding-left: 10px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.palette.lightGray};
      background-color: ${(props) => props.theme.palette.faintGray};
      cursor: default;
      pointer-events: none;
      color: ${(props) => props.theme.palette.lightGray};
    }

    .AfterButton {
      background: ${(props) => props.theme.palette.lightGray};
      cursor: default;
      pointer-events: none;
    }

    #nickname {
      width: 60%;
      height: 40px;
      padding-left: 10px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.palette.lightGray};
    }

    #skill {
      width: 95%;
      height: 40px;
      padding-left: 10px;
      margin-right: 20px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.palette.lightGray};
    }

    .resultText {
      font-size: 10px;
      color: ${(props) => props.theme.palette.orange};
      padding-left: 0.5rem;
    }

    select {
      padding-left: 10px;
      margin-right: 10px;
      width: 30%;
      height: 40px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.palette.lightGray};
      font-size: 0.6875rem;
    }
  }

  .btnWrapper {
    text-align: center;
  }
`;
const Button = styled.button`
  font: inherit;
  padding: 0.8rem 1.4rem;
  margin-left: 1.5rem;
  background: ${(props) => props.theme.palette.orange};
  color: ${(props) => props.theme.palette.white};
  font-size: 12px;
  border-radius: 3px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  text-align: center;
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

function Signup() {
  const [email, setEmail] = useState('abc12345@naver.com');
  const [nickname, setNickname] = useState('');
  const [NicknameAvailable, setNicknameAbailable] = useState(false);
  const [pos, setPos] = useState('');
  const [level, setLevel] = useState('');
  const [levelText, setLevelText] = useState('');

  const handleChangeNickname = (event: React.FormEvent<HTMLInputElement>) => {
    setNickname(event.currentTarget.value);
  };
  const handleChangePos = (event: React.FormEvent<HTMLSelectElement>) => {
    setPos(event.currentTarget.value);
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

  const CheckNickname = () => {
    if (nickname.length == 0) {
      alert('닉네임을 입력해주세요.');
      return false;
    }
    if (nickname.includes(' ')) {
      alert('닉네임은 뛰어쓰기가 불가능합니다.');
      return false;
    }
    axios
      .post('/api/users/nickname', { nickname: nickname })
      .then((response) => {
        if (response.data.success) {
          setNicknameAbailable(response.data.nickname);
        } else {
          alert('사용 불가능한 닉네임입니다. 다른 닉네임을 입력해주세요.');
          setNickname('');
          setNicknameAbailable(false);
        }
      });
  };
  const resetNickname = () => {
    setNickname('');
    setNicknameAbailable(false);
  };

  const onSubmit = () => {
    if (!NicknameAvailable) {
      alert('닉네임 중복 확인을 해주세요.');
      return false;
    }
    if (pos == '') {
      alert('분야를 선택해주세요.');
      return false;
    }
    if (level == '') {
      alert('실력을 선택해주세요.');
      return false;
    }
    const formdata = {
      email: email,
      nickname: nickname,
      position: pos,
      positionLevel: level,
    };
    axios.post('/api/users/signup', formdata).then((response) => {
      if (response.data.success) {
        alert('회원가입이 성공적으로 이루어졌습니다.');
        window.location.href = '/';
      } else {
        alert('가입에 실패했습니다. 다시 시도해주세요.');
      }
    });
  };
  return (
    <SignupSection>
      <div className="signupWrapper">
        <Title subtitle="본 캐릭터 설정" title="회원 가입이 바로 완료됩니다" />
        <div className="formWrapper">
          <SignupForm>
            <li>
              <label htmlFor="email">이메일</label>
              <div className="inputWrapper">
                <input type="text" id="email" readOnly value={email} />
                <Button className="AfterButton">인증 완료</Button>
              </div>
            </li>
            <li>
              <label htmlFor="nickname">닉네임</label>
              <div className="inputWrapper">
                <div className="checkbutton">
                  {NicknameAvailable ? (
                    <input
                      type="text"
                      id="nickname"
                      value={nickname}
                      readOnly
                    />
                  ) : (
                    <input
                      type="text"
                      id="nickname"
                      value={nickname}
                      onChange={handleChangeNickname}
                    />
                  )}
                  {NicknameAvailable ? (
                    <Button type="button" onClick={resetNickname}>
                      다시 찾기
                    </Button>
                  ) : (
                    <Button type="button" onClick={CheckNickname}>
                      중복 확인
                    </Button>
                  )}
                </div>
                {NicknameAvailable && (
                  <span className="resultText">
                    사용할 수 있습니다. 좋은 선택이예요!
                  </span>
                )}
              </div>
            </li>
            <li>
              <label>본 캐릭터 설정</label>
              <div className="inputWrapper">
                <div>
                  <select name="pos" onChange={handleChangePos}>
                    <option value="" selected disabled hidden>
                      분야
                    </option>
                    {Pos.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <select name="level" onChange={handleChangeLevel}>
                    <option value="" selected disabled hidden>
                      실력
                    </option>
                    {Level.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="resultText">{levelText}</span>
              </div>
            </li>
            <div className="btnWrapper">
              <Button type="button" onClick={onSubmit}>
                가입 완료
              </Button>
            </div>
          </SignupForm>
        </div>
      </div>
    </SignupSection>
  );
}

export default Signup;
