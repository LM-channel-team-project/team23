import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';

const HeaderStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 15%;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: #fff;
  position: sticky;
  max-width: 1200px;
  align-items: center;
  width: 100%;
  z-index: 1000;
`;

const LogoStyle = styled.img`
  cursor: pointer;
  width: 167px;
  height: 40px;
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

const AtagStyle = styled.a`
  text-decoration: none;
  color: #353535;
  &:hover {
    font-weight: bold;
    color: black;
  }
`;

const LoginStyle = styled.div`
  width: 10%;
  display: flex;
  margin-left: auto;
  font-size: 10px;
  justify-content: space-around;
  padding: 0.5rem;
  margin-right: 2rem;
`;

const Header = () => (
  <HeaderStyle>
    <LogoStyle src={logo} alt="logo" />
    <MenuStyle>
      <AtagStyle href="/project">Project</AtagStyle>
      <AtagStyle href="/people">Co-Worker</AtagStyle>
    </MenuStyle>
    <LoginStyle>
      <AtagStyle href="/join">가입</AtagStyle>/
      <AtagStyle href="/login">로그인</AtagStyle>
    </LoginStyle>
  </HeaderStyle>
);
export default Header;
