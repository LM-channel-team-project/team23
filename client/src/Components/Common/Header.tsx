import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import { CgMenuGridO } from 'react-icons/cg';

const HeaderStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
  color: #353535;
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
  padding: 0.5rem;
  margin-right: 2rem;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const IconStyle = styled(CgMenuGridO)`
  cursor: pointer;
  visibility: hidden;
  &:hover {
    width: 28px;
    height: 28px;
    color: black;
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
  const onToggle = () => {
    setOpen((open) => (open = !open));
  };
  return (
    <HeaderStyle>
      <Link to="/">
        <LogoStyle src={logo} alt="logo" />
      </Link>
      <Web>
        <MenuStyle>
          <AtagStyle to="project">Project</AtagStyle>
          <AtagStyle to="/people">Co-Worker</AtagStyle>
        </MenuStyle>
        <LoginStyle>
          <AtagStyle to="/signup">가입</AtagStyle>
          <Divider>/</Divider>
          <AtagStyle to="/login">로그인</AtagStyle>
        </LoginStyle>
      </Web>
    </HeaderStyle>
  );
}
export default Header;
