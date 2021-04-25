import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const InputSection = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding: 26px 40px 24px;
  background-color: ${(props) => props.theme.palette.faintGray};
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TabTitle = styled.h3`
  font-size: 1.375rem;
  line-height: 1.4375rem;
  font-weight: 700;
  padding-bottom: 15px;
`;

const InputWrap = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const Thumb = styled.div`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  border-radius: 100px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const TextInput = styled.textarea`
  width: 100%;
  padding: 13px 16px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  font-size: 0.8rem;
  border-radius: 4px;
  resize: none;
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ButtonWrapper = styled.div`
  width: calc(100% - 60px);
  margin-left: 60px;
`;

const Button = styled.button`
  background-color: #42495b;
  color: #fff;
  border: 1px solid #42495b;
  width: auto;
  padding: 8px 29px !important;
  border-radius: 4px;
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
`;

const Question = () => {
  return (
    <Container>
      <InputSection>
        <TabTitle>응원/질문을 올려주세요!</TabTitle>
        <InputWrap>
          <Thumb>
            <Image src="https://letspl.me/assets/images/prof_noImg.svg" />
          </Thumb>
          <TextInput
            placeholder="프로젝트에 관한 질문이나 응원메시지를 올려주세요"
            maxLength={1000}
            rows={6}
          />
        </InputWrap>
        <ButtonWrapper>
          <Button>등록</Button>
        </ButtonWrapper>
      </InputSection>
      <Comment />
    </Container>
  );
};

export default Question;
