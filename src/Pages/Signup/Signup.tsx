import React from 'react';
import SignupModal from './SignupModal';
import styled from 'styled-components';

const SignupSection = styled.section`
  .signupWrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 530px;
    padding: 80px 0 140px;
  }
`;

const H1 = styled.h1`
  margin-bottom: 28px;

  .smText {
    color: #ea6560;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  .bigText {
    color: #42495b;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 28px;
    line-height: 1.5;
    font-weight: bold;
    display: block;
  }
`;

const SignupForm = styled.ul`
  font-family: 'Noto Sans KR', sans-serif;
  li {
    display: flex;
    margin-bottom: 10px;
  }

  li label {
    padding-top: 10px;
    font-size: 11px;
    width: 95px;
    color: #696980;
    line-height: 1.5;
  }

  li .inputWrapper {
    padding-bottom: 20px;
    width: 414px;
    #email {
      width: 49%;
      height: 40px;
      padding: 1px;
      border-radius: 3px;
      border: 1px solid gray;
    }

    .btnAuth {
      color: white;
      background: #b9bac3;
      border-radius: 3px;
      border: none;
      font-size: 0.75rem;
      height: 40px;
      margin: 0 6px;
      width: 31%;
    }

    #nickname {
      width: 100%;
      height: 40px;
      padding: 1px;
      border-radius: 3px;
      border: 1px solid gray;
    }

    .resultText {
      font-size: 10px;
      color: #8e8ea2;
    }

    select {
      padding-left: 6px;
      margin-right: 10px;
      width: 30%;
      height: 40px;
      border-radius: 3px;
      border: 1px solid gray;
      font-size: 11px;
    }
  }

  .btnWrapper {
    text-align: center;
  }

  .btnWrapper button {
    width: 240px;
    height: 35px;
    padding: 11px 35px;
    background: #ea6560;
    color: white;
    font-size: 12px;
    border-radius: 3px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

function Signup() {
  return (
    <SignupSection>
      <SignupModal />
      <div className="signupWrapper">
        <H1>
          <span className="smText">본 캐릭터 설정</span>
          <span className="bigText">회원 가입이 바로 완료됩니다</span>
        </H1>
        <div className="formWrapper">
          <SignupForm>
            <li>
              <label htmlFor="email">이메일</label>
              <div className="inputWrapper">
                <input type="text" id="email" />
                <button className="btnAuth">인증 완료</button>
              </div>
            </li>
            <li>
              <label htmlFor="nickname">닉네임</label>
              <div className="inputWrapper">
                <input type="text" id="nickname" />
                <span className="resultText">
                  사용할 수 있습니다. 좋은 선택이예요!
                </span>
              </div>
            </li>
            <li>
              <label>본 캐릭터 설정</label>
              <div className="inputWrapper">
                <select name="pos">
                  <option value="plan">기획</option>
                  <option value="design">디자인</option>
                  <option value="front">프론트엔드 개발</option>
                  <option value="back">백엔드 개발</option>
                  <option value="business">사업</option>
                  <option value="etc">기타</option>
                </select>
                <select name="field">
                  <option value="plan_u">UI/UX 기획</option>
                  <option value="plan_g">게임 기획</option>
                  <option value="plan_p">프로젝트 매니저</option>
                  <option value="plan_h">하드웨어(제품) 기획</option>
                  <option value="design_g">그래픽 디자인</option>
                  <option value="design_u">UI/UX 디자인</option>
                  <option value="design_d">3D 디자인</option>
                  <option value="design_h">하드웨어(제품) 디자인</option>
                  <option value="design_e">기타</option>
                  <option value="front_i">IOS</option>
                  <option value="front_a">안드로이드</option>
                  <option value="front_f">웹 프론트엔드</option>
                  <option value="front_p">웹 퍼블리셔</option>
                  <option value="front_c">크로스플랫폼</option>
                  <option value="back_w">웹 서버</option>
                  <option value="back_b">블록체인</option>
                  <option value="back_a">AI</option>
                  <option value="back_d">DB/빅데이터/DS</option>
                  <option value="back_g">게임 서버</option>
                  <option value="business_b">사업 기획/개발</option>
                  <option value="business_m">마케팅</option>
                  <option value="business_f">재무/회계</option>
                  <option value="business_s">영업</option>
                  <option value="business_e">그외</option>
                  <option value="etc_s">사운드</option>
                  <option value="etc_v">영상</option>
                  <option value="etc_o">운영</option>
                  <option value="etc_q">QA</option>
                  <option value="etc_e">기타</option>
                </select>
                <select name="skill">
                  <option value="skill_D">초심자</option>
                  <option value="skill_C">초보</option>
                  <option value="skill_B">중수</option>
                  <option value="skill_A">고수</option>
                  <option value="skill_S">구루</option>
                </select>
              </div>
            </li>
            <div className="btnWrapper">
              <button>가입완료</button>
            </div>
          </SignupForm>
        </div>
      </div>
    </SignupSection>
  );
}

export default Signup;
