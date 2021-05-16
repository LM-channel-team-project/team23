import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FiCamera } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from 'axios';
import { render } from '@testing-library/react';

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

const ShowImg = styled.img`
  width: 200px;
  height: 200px;
  position: relative;
  bottom: 50px;
  right: 50px;
  background: cover;
`;

const ChangeImgButton = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  bottom: 20px;
  left: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.white};
  background-color: ${(props) => props.theme.palette.red};
  &:hover {
    cursor: pointer;
  }
`;

function ImgInfo() {
  const fileInput = useRef(null);
  const [imgBase64, setImgBase64] = useState('');
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleChangeFile = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const imageFile = event.currentTarget.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setImgFile(imageFile);
      setFileUrl(imageUrl);
    }
  };

  const UploadFile = () => {
    const formData = new FormData();
    const config = {
      header: { 'content-type': 'multipart/form-data' },
    };
    if (imgFile) {
      formData.append('file', imgFile);
    }
  };

  return (
    <Container>
      <ImgArea>
        <ImgStyle>
          {fileUrl ? (
            <ShowImg src={fileUrl} />
          ) : (
            <BsFillPersonFill size="120" />
          )}
        </ImgStyle>
      </ImgArea>
      <ChangeImgButton htmlFor="imgFile">
        <FiCamera size="22" />
      </ChangeImgButton>
      <input
        type="file"
        ref={fileInput}
        name="imgFile"
        id="imgFile"
        accept="image/*"
        onChange={handleChangeFile}
        style={{ display: 'none' }}
      />
    </Container>
  );
}

export default ImgInfo;
