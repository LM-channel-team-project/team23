import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import LoginAndSignupModal from './LoginAndSignupModal';
import ProfileModal from './ProfileModal';
import Button from './Button';
import { USER_SERVER } from '../../Config';

const HeaderStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.white};
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 3px 27px 0 rgba(0, 0, 0, 0.02);
`;

const LogoStyle = styled.img`
  cursor: pointer;
  width: 140px;
  height: 35px;
  border-style: none;
  margin-left: 1.8rem;
`;

const MenuStyle = styled.div`
  width: 40%;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  padding-inline-start: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
`;

const AtagStyle = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.gray};
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const LoginStyle = styled.div`
  width: 100px;
  display: flex;
  margin-left: auto;
  font-size: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin-right: 3rem;
`;

const LoginText = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.palette.gray};
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const SigninStyle = styled.div`
  width: 20%;
  margin-left: auto;
  margin-right: 3rem;
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const Web = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  const [openLoginSignup, setOpenLoginSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const switchLoginSignup = (login: boolean) => {
    setIsLogin(login);
  };

  const onToggle = (login: boolean) => {
    switchLoginSignup(login);
    setOpenLoginSignup((open) => !open);
  };

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (userId === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [userId]);

  return (
    <HeaderStyle>
      <Link to="/">
        <LogoStyle src={logo} alt="logo" />
      </Link>
      <Web>
        <MenuStyle>
          <AtagStyle to="/project">Project</AtagStyle>
          <AtagStyle to="/people">Co-Worker</AtagStyle>
        </MenuStyle>
        {isLogin ? (
          <SigninStyle>
            <Button
              ButtonColor="orange"
              ButtonMode="active"
              ButtonName="프로젝트 생성"
              ButtonSize="large"
              onClick={() => (window.location.href = '/BuildProject')}
            />
            <UserImg
              src="http://kawala.in/assets/global/images/avatars/avatar1.png"
              alt="Avatar"
              onClick={() => setOpenProfile((open) => !open)}
            />
            {openProfile && <ProfileModal />}
          </SigninStyle>
        ) : (
          <div>
            <LoginStyle>
              <LoginText onClick={() => onToggle(false)}>가입</LoginText>
              <Divider>/</Divider>
              <LoginText onClick={() => onToggle(true)}>로그인</LoginText>
            </LoginStyle>
            <LoginAndSignupModal
              openLoginSignup={openLoginSignup}
              onToggle={onToggle}
              switchLoginSignup={switchLoginSignup}
              isLogin={isLogin}
            />
          </div>
        )}
      </Web>
    </HeaderStyle>
  );
}
export default Header;
