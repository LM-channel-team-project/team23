import React from 'react';
import styled from 'styled-components';

const Footerstyle = styled.div`
  background-color: #00112e;
  padding: 20px 0;
  z-index: 99;
  position: relative;
  color: white;
  text-align: center;
  font-size: 0.8rem;
`;

const Footer = () => (
  <Footerstyle>
    <span>©2021 Team_Sunday. All rights Reserved.</span>
  </Footerstyle>
);

export default Footer;
