import React from 'react';
import styled from 'styled-components';
import { FiCamera } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';

const Container = styled.div`
  width: 250px;
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px 15px;
`;

const ImgArea = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  top: 20px;
  left: 10px;
  overflow: hidden;
  color: ${(props) => props.theme.palette.lightGray};
  background-color: ${(props) => props.theme.palette.faintGray};
`;

const ImgStyle = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
`;

const ChangeImgButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-style: none;
  background-color: ${(props) => props.theme.palette.red};
  color: ${(props) => props.theme.palette.white};
  position: relative;
  bottom: 20px;
  left: 120px;
  &:hover {
    cursor: pointer;
  }
`;

function ImgInfo() {
  return (
    <Container>
      <ImgArea>
        <ImgStyle>
          <BsFillPersonFill size="120" />
        </ImgStyle>
      </ImgArea>
      <ChangeImgButton>
        <FiCamera size="22" />
      </ChangeImgButton>
    </Container>
  );
}

export default ImgInfo;
