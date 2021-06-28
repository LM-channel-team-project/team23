import React, { useState } from 'react';
import styled from 'styled-components';
import { BsFillChatDotsFill } from 'react-icons/bs';
import Chatbox from './chatbox';

const FloatButton = styled.button`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: ${(props) => props.theme.palette.orange};
  color: ${(props) => props.theme.palette.white};
  border-radius: 50%;
  border: none;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 20;
  font-size: 24px;
  cursor: pointer;
`;

const Chatbutton = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const onToggle = () => {
    setVisible((state) => !state);
  };
  return (
    <>
      <FloatButton onClick={onToggle} type="button">
        <BsFillChatDotsFill />
      </FloatButton>
      {visible && <Chatbox />}
    </>
  );
};

export default Chatbutton;
