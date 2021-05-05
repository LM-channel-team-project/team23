import React from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

const Header = styled.div`
  width: 100%;
  padding: 62px 20px 32px 160px;
  background: ${(props) => props.theme.palette.red};
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.palette.white};
  margin-bottom: 1rem;
`;
const SubTitle = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.palette.white};
`;
const Content = styled.form`
  width: 1200px;
  margin: 30px auto;
  padding: 40px 120px;
  border-radius: 8px;
  box-shadow: 0px 0px 12px 2px ${(props) => props.theme.palette.lightGray};
`;
const Section = styled.section`
  margin-bottom: 2rem;
`;
const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
const SectionInfo = styled.p`
  font-size: 16px;
  padding-top: 10px;
  color: ${(props) => props.theme.palette.lightGray};
`;
const Input = styled.input`
  width: 960px;
  height: 42px;
  box-sizing: border-box;
  margin-top: 1.5rem;
  padding: 12px 20px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
`;
const ProjectImageWrapper = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;
const ProjectImage = styled.div`
  flex: 1;
  display: flex;
  background: ${(props) => props.theme.palette.lightGray};
  align-items: center;
  justify-content: center;
  opacity: 70%
  width: 385px;
  height: 242px;
  border-radius: 3px;
  font-size: 36px;
  margin-right: 2rem;
`;
const UploadWrapper = styled.div`
  flex: 2;
  padding-top: 130px;
`;
const ImageUploadBtn = styled.button`
  padding: 7px 20px;
  margin-bottom: 16px;
  font-size: 12px;
  background: ${(props) => props.theme.palette.white};
  border-radius: 4px;
  border: 1px solid;
  &:hover {
    cursor: pointer;
  }
`;
const ProjectImageAltInfo = styled.p`
  font-size: 16px;
  margin-bottom: 18px;
`;
const ProjectImageAltWrapper = styled.div`
  display: flex;
`;
const ProjectImageAltImage = styled.img`
  width: 160px;
  height: 96px;
  &:not(:last-child) {
    margin-right: 7px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const ProjectExplain = styled.textarea`
  margin-top: 1.5rem;
  width: 960px;
  min-height: 620px;
  resize: vertical;
`;
const ProjectExplainBtnWrapper = styled.div`
  margin-top: 1.5rem;
`;
const InitBtn = styled.button`
  padding: 8px 29px;
  margin-right: 12px;
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.lightGray};
  border-radius: 3px;
  font-size: 12px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const InitOnlyContentBtn = styled.button`
  padding: 8px 29px;
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.red};
  border-radius: 3px;
  font-size: 12px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const FieldWrapper = styled.div`
  margin: 1.5rem 0;
`;
const FieldLabel = styled.label`
  font-size: 16px;
  margin-right: 3rem;
`;
const FieldCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  font-size: 16px;
  border-radius: 3px;
  margin-right: 0.3rem;
`;
const Select = styled.select`
  margin-top: 1.5rem;
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  font-size: 12px;
`;
const Option = styled.option`
  font-size: 12px;
`;
const RecruitWrapper = styled.div`
  display: flex;
`;
const CountWrapper = styled.div`
  padding-top: 31px;
  justify-content: center;
  margin: 0 1.5rem;
  font-size: 20px;
  & .cnt {
    margin: 0 1.5rem;
  }
  & :not(.cnt):hover {
    cursor: pointer;
  }
`;
const TwoBtnWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: right;
`;
const RemoveBtn = styled.button`
  margin-right: 1rem;
  padding: 13px 29px;
  font-size: 13px;
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.darkblue};
  border: none;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;
const AddBtn = styled.button`
  padding: 13px 29px;
  font-size: 13px;
  color: ${(props) => props.theme.palette.black};
  background: ${(props) => props.theme.palette.white};
  box-sizing: border-box;
  border: 1px solid;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;
const RefWrapper = styled.div``;
const SubmitBtn = styled.button`
  color: ${(props) => props.theme.palette.white};
  background: ${(props) => props.theme.palette.red};
  border: none;
  border-radius: 4px;
  padding: 8px 29px;
  font-size: 12px;
  position: relative;
  left: 480px;
  transform: translate(-50%, 0);
  &:hover {
    cursor: pointer;
  }
`;

function BuildProject() {
  return (
    <>
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
            * 프로젝트 썸네일로 보여질 이미지를 선택해주세요.
          </SectionInfo>
          <ProjectImageWrapper>
            <ProjectImage>
              <FaCamera />
            </ProjectImage>
            <UploadWrapper>
              <ImageUploadBtn>이미지 업로드</ImageUploadBtn>
              <SectionInfo>
                * 가로/세로의 비율이 2:1일 때 썸네일이 가장 예쁩니다.
              </SectionInfo>
              <SectionInfo>
                * 저작권에 위배되지 않는 파일만 업로드 해주세요.
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
            * 설명이 풍부한 프로젝트는, 아닌 프로젝트에 비해 지원률이 50%
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
          <SectionInfo>* 아래 분야 중에 한가지를 선택해주세요.</SectionInfo>
          <FieldWrapper>
            <FieldCheckbox id="web" /> <FieldLabel htmlFor="web">웹</FieldLabel>
            <FieldCheckbox id="app" /> <FieldLabel htmlFor="app">앱</FieldLabel>
            <FieldCheckbox id="game" />{' '}
            <FieldLabel htmlFor="game">게임</FieldLabel>
          </FieldWrapper>
        </Section>
        <Section>
          <SectionTitle>(필수) 지역</SectionTitle>
          <SectionInfo>* 장소를 선택해주세요.</SectionInfo>
          <Select>
            <Option>상관없음</Option>
            <Option>서울특별시</Option>
            <Option>경기도</Option>
            <Option>부산광역시</Option>
            <Option>인천광역시</Option>
            <Option>대구광역시</Option>
            <Option>경상남도</Option>
            <Option>경상북도</Option>
            <Option>대전광역시</Option>
            <Option>충청남도</Option>
            <Option>충청북도</Option>
            <Option>전라남도</Option>
            <Option>전라북도</Option>
            <Option>광주광역시</Option>
            <Option>강원도</Option>
            <Option>울산광역시</Option>
            <Option>제주특별자치도</Option>
            <Option>세종특별자치시</Option>
          </Select>
        </Section>
        <Section>
          <SectionTitle>(필수) 모집인원</SectionTitle>
          <SectionInfo>
            * 나중에 변경/추가가 가능합니다. 3~4명을 추천합니다.
          </SectionInfo>
          <RecruitWrapper>
            <Select>
              <Option>IOS</Option>
              <Option>안드로이드</Option>
              <Option>웹프론트엔드</Option>
              <Option>크로스플랫폼</Option>
              <Option>웹서버</Option>
              <Option>블록체인</Option>
              <Option>AI</Option>
              <Option>DB/빅데이터</Option>
              <Option>게임</Option>
            </Select>
            <CountWrapper>
              <i>-</i>
              <span className="cnt">1</span>
              <i>+</i>
            </CountWrapper>
            <TwoBtnWrapper>
              <RemoveBtn>삭제</RemoveBtn>
              <AddBtn>추가</AddBtn>
            </TwoBtnWrapper>
          </RecruitWrapper>
        </Section>
        <Section>
          <SectionTitle>(필수) 요구레벨</SectionTitle>
          <SectionInfo>
            프로젝트에 필요한 팀원의 레벨을 선택해주세요.
          </SectionInfo>
          <Select>
            <Option>초보</Option>
            <Option>중수</Option>
            <Option>고수</Option>
          </Select>
        </Section>
        <Section>
          <SectionTitle>(선택) 참고 자료 (최대 5개)</SectionTitle>
          <SectionInfo>
            * 벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를
            등록해주세요.
          </SectionInfo>
          <RefWrapper>
            <Input placeholder="https://letspl.me" />
            <TwoBtnWrapper>
              <RemoveBtn>삭제</RemoveBtn>
              <AddBtn>추가</AddBtn>
            </TwoBtnWrapper>
          </RefWrapper>
        </Section>
        <SubmitBtn type="submit">작성완료</SubmitBtn>
      </Content>
    </>
  );
}

export default BuildProject;
