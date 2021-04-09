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
  }

  & > .signupBtn {
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

  & > .signupBtn.google {
    background: #f44336;
  }

  & > .signupBtn.github {
    background: #2b3137;
  }

  & > .loginBtn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    color: #8e8ea2;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }

  & > .info {
    a {
      text-decoration: none;
      color: red;
    }
    font-size: 11px;
    margin-top: 12px;
    line-height: 1.5;
  }
`;

const SignupModal: React.FC = () => {
  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <MdClose />
          <p className="modalTit">회원 가입하기</p>
          <button className="signupBtn google">
            <FaGoogle />
            <span>구글 계정으로 가입</span>
          </button>
          <button className="signupBtn github">
            <FaGithub />
            <span>깃허브 계정으로 가입</span>
          </button>
          <div className="info">
            소셜 로그인으로 가입 시 <a href="">이용약관</a>,{' '}
            <a href="">개인정보처리방침</a>, <a href="">전자금융거래약관</a>에
            동의함으로 처리됩니다
          </div>
          <div className="loginBtn">로그인</div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default SignupModal;
