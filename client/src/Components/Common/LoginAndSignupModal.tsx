import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLINET_ID, USER_SERVER } from '../../Config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';

const ModalWrapper = styled.div<{ openLoginSignup: boolean }>`
  display: ${(props) => (props.openLoginSignup ? 'block' : 'none')};
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

  & > .modalTit {
    margin-bottom: 32px;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.palette.black};
  }

  & button {
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 6px;
    border-radius: 4px;
    font: inherit;
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

  & svg {
    position: absolute;
    width: 10%;
    height: 36px;
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
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  width: 100%;
`;

interface IProps {
  openLoginSignup: boolean;
  onToggle: (login: boolean) => void;
  switchLoginSignup: (login: boolean) => void;
  isLogin: boolean;
}

const LoginAndSignUpModal = ({
  openLoginSignup,
  onToggle,
  switchLoginSignup,
  isLogin,
}: IProps) => {
  const history = useHistory();
  const SuccessGoogleLogin = (result: any) => {
    const userEmail = result.profileObj.email;
    const userGoogleID = result.googleId;
    const GoogleTokenObj = result.tokenObj;
    // token type, access_token, expires_at, expires_in, first_issued_at, id_token, idpId, login_hint
    axios
      .post(`${USER_SERVER}/login`, { email: userEmail })
      .then((response) => {
        if (response.data.success) {
          onToggle(true);
          window.localStorage.setItem('userId', response.data.userId);
          console.log('로그인');
          console.log(userEmail);
        } else {
          onToggle(true);
          history.push({
            pathname: '/signup',
            state: { email: userEmail },
          });
        }
      });
  };

  return (
    <ModalWrapper openLoginSignup={openLoginSignup}>
      <ModalContent>
        <SMdClose onClick={() => onToggle(true)} />
        <p className="modalTit">{isLogin ? '로그인' : '회원 가입하기'}</p>
        <GoogleLogin
          clientId={GOOGLE_CLINET_ID}
          onSuccess={SuccessGoogleLogin}
          onFailure={(result) => console.log(result)}
          cookiePolicy={'single_host_origin'}
          style={{ display: 'none' }}
          render={(renderProps) => (
            <button className="loginBtn google" onClick={renderProps.onClick}>
              <FaGoogle />
              {isLogin ? (
                <span>구글 계정으로 로그인하기</span>
              ) : (
                <span>구글 계정으로 가입하기</span>
              )}
            </button>
          )}
        />
        <button className="loginBtn github">
          <FaGithub />
          <ButtonText>
            깃허브 계정으로 {isLogin ? '로그인' : '가입하기'}
          </ButtonText>
        </button>
        <Button ButtonColor="red" ButtonSize="xLarge" ButtonMode="active">
          <FaGoogle />
          <ButtonText>
            구글 계정으로 {isLogin ? '로그인' : '가입하기'}
          </ButtonText>
        </Button>
        {!isLogin && (
          <div className="info">
            소셜 로그인으로 가입 시 <a href="#">이용약관</a>,{' '}
            <a href="#">개인정보처리방침</a>, <a href="#">전자금융거래약관</a>에
            동의함으로 처리됩니다
          </div>
        )}
        {isLogin ? (
          <div className="signupBtn" onClick={() => switchLoginSignup(false)}>
            회원 가입하기
          </div>
        ) : (
          <div className="signupBtn" onClick={() => switchLoginSignup(true)}>
            로그인
          </div>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

export default LoginAndSignUpModal;
