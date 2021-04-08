import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';

const HeaderStyle = styled.nav`
  display: flex;
  flex-direction: row;
  height: 2rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  position: sticky;
  max-width: 1200px;
  align-items: center;
  width: 100%;
`;

const LogoStyle = styled.img`
  cursor: pointer;
  width: 82px;
  height: 36px;
  border-style: none;
`;

const MenuStyle = styled.div`
  margin: 0;
  list-style: none;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  display: flex;
  justify-content: space-around;
`;

const AtagStyle = styled.a`
  text-decoration: none;
  color: #333;
`;

const Header = () => (
  <HeaderStyle>
    <LogoStyle src={logo} alt="logo" />
    <MenuStyle>
      <AtagStyle href="/project">What&aposs NEXT?</AtagStyle>
      <AtagStyle href="/people">With_me</AtagStyle>
    </MenuStyle>
    <MenuStyle>
      <AtagStyle href="/join">가입</AtagStyle>
      <AtagStyle href="/login">로그인</AtagStyle>
    </MenuStyle>
  </HeaderStyle>
);
export default Header;
