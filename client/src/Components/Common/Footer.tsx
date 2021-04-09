import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background-color: #00112d;
`;
const FooterInfo = styled.div`
  text-align: flex-start;
  max-width: 1100px;
  margin: 0 auto;
`;
const FooterNavTop = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #ffffff;
`;
const NavItem = styled(Link)`
  color: #ffffff;
  font-size: 0.6em;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
const FooterNavBottom = styled.div`
  padding: 15px 0;
`;

const Column = styled.div`
  font-size: 0.6em;
  color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterInfo>
      <FooterNavTop>
        <NavItem to="#">공지사항</NavItem>
        <NavItem to="#">FAQ</NavItem>
        <NavItem to="#">서비스 이용약관</NavItem>
        <NavItem to="#">개인정보 취급방침</NavItem>
        <NavItem to="#">전자금융 거래약관</NavItem>
        <NavItem to="#">결제/환불약관</NavItem>
      </FooterNavTop>
      <FooterNavBottom>
        <Column>
          어썸크루 | 사업자등록번호 : 619-39-00615 | 대표 : 이승준
        </Column>
        <Column>
          통신판매업신고 | 판매업신고번호 : 제 2020-서울마포-1796호
        </Column>
        <Column>서울특별시 마포구 신수동 22-35 하나테크노빌 1002호</Column>
        <Column>
          TEL : 070-8064-3497 | 개인정보담당자 : 이승준 | help@letspl.me
        </Column>
      </FooterNavBottom>
    </FooterInfo>
  </FooterContainer>
);
export default Footer;
