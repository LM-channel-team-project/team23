import React from 'react';
import styled from 'styled-components';
import Title from '../../Components/Common/Title';

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

const SignupForm = styled.ul`
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
    }

    .btnAuth {
      color: ${(props) => props.theme.palette.white};
      background: ${(props) => props.theme.palette.lightGray};
      border-radius: 3px;
      border: none;
      font-size: 0.75rem;
      height: 40px;
      margin: 0 6px;
      width: 31%;
      font-family: 'Noto Sans KR', sans-serif;
    }

    #nickname {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      border-radius: 3px;
      border: 1px solid ${(props) => props.theme.palette.lightGray};
    }

    .resultText {
      font-size: 10px;
      color: ${(props) => props.theme.palette.lightGray};
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

  .btnWrapper button {
    width: 240px;
    height: 35px;
    padding: 11px 35px;
    background: ${(props) => props.theme.palette.orange};
    font-family: 'Noto Sans KR', sans-serif;
    color: ${(props) => props.theme.palette.white};
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
      {/* <SignupModal /> */}
      <div className="signupWrapper">
        <Title subtitle="본 캐릭터 설정" title="회원 가입이 바로 완료됩니다" />
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
              <button>가입 완료</button>
            </div>
          </SignupForm>
        </div>
      </div>
    </SignupSection>
  );
}

export default Signup;
