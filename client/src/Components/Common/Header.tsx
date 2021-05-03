import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import { CgMenuGridO } from 'react-icons/cg';
import LoginAndSignupModal from './LoginAndSignupModal';
import ProfileModal from './ProfileModal';

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
  width: 50%;
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
  width: 10%;
  display: flex;
  margin-left: auto;
  font-size: 10px;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin-right: 9rem;
  /* display: none; */
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
  margin-right: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // display: none;
`;

const ProjectButton = styled.button`
  width: 160px;
  height: 35px;
  padding: 11px 20px;
  background: ${(props) => props.theme.palette.orange};
  font-family: 'Noto Sans KR', sans-serif;
  color: ${(props) => props.theme.palette.white};
  font-size: 12px;
  margin-right: 3rem;
  border-radius: 3px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const IconStyle = styled(CgMenuGridO)`
  cursor: pointer;
  visibility: hidden;
  &:hover {
    width: 28px;
    height: 28px;
    color: ${(props) => props.theme.palette.black};
  }
`;

const Web = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: column;
`;

function Header() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const switchLoginSignup = (login: boolean) => {
    setIsLogin(login);
  };

  const onToggle = (login: boolean) => {
    switchLoginSignup(login);
    setOpen((open) => !open);
  };

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
        <LoginStyle>
          <LoginText onClick={() => onToggle(false)}>가입</LoginText>
          <Divider>/</Divider>
          <LoginText onClick={() => onToggle(true)}>로그인</LoginText>
        </LoginStyle>
        <LoginAndSignupModal
          open={open}
          onToggle={onToggle}
          switchLoginSignup={switchLoginSignup}
          isLogin={isLogin}
        />
        <SigninStyle>
          <ProjectButton>프로젝트 생성</ProjectButton>
          <UserImg
            src="http://kawala.in/assets/global/images/avatars/avatar1.png"
            alt="Avatar"
          />
        </SigninStyle>
      </Web>
      <ProfileModal />
    </HeaderStyle>
  );
}
export default Header;
