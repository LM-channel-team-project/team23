import React from 'react';
import logoImg from '../imgs/logo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  display: flex;
  top: 0;
  max-width: 1200px;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 3px 27px 0 rgba(0, 0, 0, 0.02);
`;

const HomeLink = styled(Link)`
  background-image: url(${logoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 140px;
  height: 35px;
`;
const Logo = styled.div``;

const List = styled.ul`
  display: flex;
  margin-left: 100px;
`;
const Item = styled.li`
  width: 80px;
  text-align: center;
`;
const ItemLink = styled(Link)``;

const LoginJoin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  color: #666;
  font-weight: 600;
`;
const LoginJoinLink = styled(Link)``;
const Divider = styled.span`
  margin: 0 10px;
`;
const Header = () => (
  <Nav>
    <HomeLink to="/">
      <Logo></Logo>
    </HomeLink>
    <List>
      <Item>
        <ItemLink to="/people">렛플인</ItemLink>
      </Item>
      <Item>
        <ItemLink to="/project">프로젝트</ItemLink>
      </Item>
      <Item>
        <ItemLink to="/story">스토리</ItemLink>
      </Item>
      <Item>
        <ItemLink to="/lounge">라운지</ItemLink>
      </Item>
    </List>
    <LoginJoin>
      <LoginJoinLink to="/join">가입</LoginJoinLink>
      <Divider> / </Divider>
      <LoginJoinLink to="/login">로그인</LoginJoinLink>
    </LoginJoin>
  </Nav>
);

export default Header;
