import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 384px;
  width: 100%;
  border-radius: 8px;
  background: white;
  padding: 46px 30px 74px;
  box-sizing: border-box;
  & > svg {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  & > .modalTit {
    margin-bottom: 32px;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
  }

  & > .loginBtn {
    position: relative;
    max-width: 324px;
    width: 100%;
    height: 40px;
    margin-bottom: 6px;
    border-radius: 4px;
    border: none;
    text-align: center;
    color: white;
    font-size: 12px;
    & > svg {
      position: absolute;
      top: 50%;
      left: 4px;
      transform: translate(0, -50%);
      width: 30px;
      height: 30px;
    }
    &:hover {
      cursor: pointer;
    }
  }

  & > .loginBtn.google {
    background: #f44336;
  }

  & > .loginBtn.github {
    background: #2b3137;
  }

  & > .signupBtn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    color: #8e8ea2;
    font-size: 12px;
    font-family: 'Noto Sans KR', sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Login: React.FC = () => {
  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <MdClose />
          <p className="modalTit">로그인</p>
          <button className="loginBtn google">
            <FaGoogle />
            <span>구글 계정으로 로그인</span>
          </button>
          <button className="loginBtn github">
            <FaGithub />
            <span>깃허브 계정으로 로그인</span>
          </button>
          <div className="signupBtn">회원 가입하기</div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Login;