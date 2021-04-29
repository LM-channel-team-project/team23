import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const ModalWrapper = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1100;
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
  background: ${(props) => props.theme.palette.white};
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
    color: ${(props) => props.theme.palette.black};
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
    color: ${(props) => props.theme.palette.white};
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
    background: ${(props) => props.theme.palette.red};
  }

  & > .loginBtn.github {
    background: ${(props) => props.theme.palette.gray};
  }

  & > .signupBtn {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    color: ${(props) => props.theme.palette.gray};
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
  }
  & > .info {
    a {
      color: ${(props) => props.theme.palette.red};
    }
    font-size: 11px;
    margin-top: 12px;
    line-height: 1.5;
  }
`;

const SMdClose = styled(MdClose)`
  cursor: pointer;
`;

interface IProps {
  open: boolean;
  onToggle: (login: boolean) => void;
  checkLoginSignup: (login: boolean) => void;
  isLogin: boolean;
}

const LoginAndSignUpModal = ({
  open,
  onToggle,
  checkLoginSignup,
  isLogin,
}: IProps) => {
  return (
    <ModalWrapper open={open}>
      <ModalContent>
        <SMdClose onClick={() => onToggle(true)} />
        <p className="modalTit">{isLogin ? '로그인' : '회원 가입하기'}</p>
        <button className="loginBtn google">
          <FaGoogle />
          <span>구글 계정으로 {isLogin ? '로그인' : '가입하기'}</span>
        </button>
        <button className="loginBtn github">
          <FaGithub />
          <span>깃허브 계정으로 {isLogin ? '로그인' : '가입하기'}</span>
        </button>
        {!isLogin && (
          <div className="info">
            소셜 로그인으로 가입 시 <a href="#">이용약관</a>,{' '}
            <a href="#">개인정보처리방침</a>, <a href="#">전자금융거래약관</a>에
            동의함으로 처리됩니다
          </div>
        )}
        {isLogin ? (
          <div className="signupBtn" onClick={() => checkLoginSignup(false)}>
            회원 가입하기
          </div>
        ) : (
          <div className="signupBtn" onClick={() => checkLoginSignup(true)}>
            로그인
          </div>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default LoginAndSignUpModal;
