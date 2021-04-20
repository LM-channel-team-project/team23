import React from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

const Header = styled.div``;
const Title = styled.h2``;
const SubTitle = styled.p``;
const Content = styled.form``;
const Section = styled.section``;
const SectionTitle = styled.h3``;
const SectionInfo = styled.p``;
const Input = styled.input``;
const ProjectImageWrapper = styled.div``;
const ProjectImage = styled.div``;
const UploadWrapper = styled.div``;
const ImageUploadBtn = styled.button``;
const ProjectImageAltInfo = styled.p``;
const ProjectImageAltWrapper = styled.div``;
const ProjectImageAltImage = styled.img``;
const ProjectExplain = styled.textarea``;
const ProjectExplainBtnWrapper = styled.div``;
const InitBtn = styled.button``;
const InitOnlyContentBtn = styled.button``;
const FieldLabel = styled.label``;
const FieldCheckbox = styled.input.attrs({
  type: 'checkbox',
})``;
const Select = styled.select``;
const Option = styled.option``;
const RecruitWrapper = styled.div``;
const CountWrapper = styled.div``;
const TwoBtnWrapper = styled.div``;
const RemoveBtn = styled.button``;
const AddBtn = styled.button``;
const SubmitBtn = styled.button``;

function BuildProject() {
  return (
    <div>
      <Header>
        <Title>프로젝트 생성</Title>
        <SubTitle>
          만들고 싶은 프로젝트가 있다면 함께 하나씩 정리해봐요!
        </SubTitle>
      </Header>
      <Content>
        <Section>
          <SectionTitle>(필수) 프로젝트명</SectionTitle>
          <SectionInfo>
            * 직관적인 프로젝트명을 사용하시면 클릭률이 올라갑니다.
          </SectionInfo>
          <Input placeholder="3~15 글자로 적어주세요 예) 승차거부 신고앱" />
        </Section>
        <Section>
          <SectionTitle>(필수) 대표 이미지</SectionTitle>
          <SectionInfo>
            프로젝트 썸네일로 보여질 이미지를 선택해주세요.
          </SectionInfo>
          <ProjectImageWrapper>
            <ProjectImage>
              <FaCamera />
            </ProjectImage>
            <UploadWrapper>
              <ImageUploadBtn>이미지 업로드</ImageUploadBtn>
              <SectionInfo>
                가로/세로의 비율이 2:1일 때 썸네일이 가장 예쁩니다.
              </SectionInfo>
              <SectionInfo>
                저작권에 위배되지 않는 파일만 업로드 해주세요.
              </SectionInfo>
            </UploadWrapper>
          </ProjectImageWrapper>
          <ProjectImageAltInfo>
            이미지가 없으신 분들은 아래에서 이미지를 선택해주세요.
          </ProjectImageAltInfo>
          <ProjectImageAltWrapper>
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_1.png"
              alt="Thumb1"
            />
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_2.png"
              alt="Thumb2"
            />
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_3.png"
              alt="Thumb3"
            />
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_4.png"
              alt="Thumb4"
            />
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_5.png"
              alt="Thumb5"
            />
            <ProjectImageAltImage
              src="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
              alt="Thumb6"
            />
          </ProjectImageAltWrapper>
        </Section>
        <Section>
          <SectionTitle>(필수) 프로젝트 설명</SectionTitle>
          <SectionInfo>
            설명이 풍부한 프로젝트는, 아닌 프로젝트에 비해 지원률이 50%
            높습니다.
          </SectionInfo>
          <ProjectExplain />
          <ProjectExplainBtnWrapper>
            <InitBtn>초기화</InitBtn>
            <InitOnlyContentBtn>입력칸만</InitOnlyContentBtn>
          </ProjectExplainBtnWrapper>
        </Section>
        <Section>
          <SectionTitle>(필수) 프로젝트 분야</SectionTitle>
          <SectionInfo>아래 분야 중에 한가지를 선택해주세요.</SectionInfo>
          <FieldCheckbox id="web" /> <FieldLabel htmlFor="web">웹</FieldLabel>
          <FieldCheckbox id="app" /> <FieldLabel htmlFor="app">앱</FieldLabel>
          <FieldCheckbox id="game" />{' '}
          <FieldLabel htmlFor="game">게임</FieldLabel>
        </Section>
        <Section>
          <SectionTitle>(필수) 지역</SectionTitle>
          <SectionInfo>장소를 선택해주세요.</SectionInfo>
          <Select>
            <Option>상관없음</Option>
            <Option>서울</Option>
            <Option>인천</Option>
          </Select>
        </Section>
        <Section>
          <SectionTitle>(필수) 모집인원</SectionTitle>
          <SectionInfo>
            나중에 변경/추가가 가능합니다. 3~4명을 추천합니다.
          </SectionInfo>
          <RecruitWrapper>
            <Select>
              <Option>웹</Option>
              <Option>서버</Option>
              <Option>앱</Option>
            </Select>
            <CountWrapper>
              <i> - </i>
              <span className="cnt">1</span>
              <i> + </i>
            </CountWrapper>
          </RecruitWrapper>
          <TwoBtnWrapper>
            <RemoveBtn>삭제</RemoveBtn>
            <AddBtn>추가</AddBtn>
          </TwoBtnWrapper>
        </Section>
        <Section>
          <SectionTitle>(선택) 참고 자료 (최대 5개)</SectionTitle>
          <SectionInfo>
            벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를
            등록해주세요.
          </SectionInfo>
          <Input />
          <TwoBtnWrapper>
            <RemoveBtn>삭제</RemoveBtn>
            <AddBtn>추가</AddBtn>
          </TwoBtnWrapper>
        </Section>
        <SubmitBtn type="submit">작성완료</SubmitBtn>
      </Content>
    </div>
  );
}

export default BuildProject;
