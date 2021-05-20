import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';
import Button from '../../Components/Common/Button';
import SelectBox from '../../Components/Common/SelectBox';
import InputBox from '../../Components/Common/InputBox';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section = styled.section`
  margin-bottom: 2rem;
  & select {
    margin: 0;
    margin-top: 0.6rem;
  }
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
const ProjectImageWrapper = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;
const ProjectImage = styled.div`
  display: flex;
  background: ${(props) => props.theme.palette.lightGray};
  align-items: center;
  justify-content: center;
  width: 385px;
  height: 242px;
  border-radius: 3px;
  font-size: 36px;
  margin-right: 2rem;
`;

const ProjectThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const UploadWrapper = styled.div`
  padding-top: 130px;
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
    border: 1px solid ${(props) => props.theme.palette.orange};
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

const ProjectDateTitle = styled.span`
  margin-right: 15px;
`;

const SDatePicker = styled(DatePicker)`
  margin-top: 1.5rem;
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  font-size: 12px;
`;

const RecruitWrapper = styled.div`
  display: flex;
  align-items: center;
  & > select {
    margin: 0;
  }
`;
const CountWrapper = styled.div`
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
const TwoBtnWrapper = styled.div``;
const DateWrapper = styled.div``;
const RefWrapper = styled.div``;

const sampleImages = [
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_1.png',
    alt: 'sample1',
  },
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_2.png',
    alt: 'sample2',
  },
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_3.png',
    alt: 'sample3',
  },
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_4.png',
    alt: 'sample4',
  },
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_5.png',
    alt: 'sample5',
  },
  {
    url:
      'https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png',
    alt: 'sample6',
  },
];

function BuildProject() {
  const [projectTitle, setProjectTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [location, setLocation] = useState('');
  const [pos, setPos] = useState('');
  const [level, setLevel] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [referenceUrl, setReferenceUrl] = useState('');

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
          <InputBox
            InputBoxSize="xl"
            InputBoxType="active"
            placeholder="3~15 글자로 적어주세요 예) 승차거부 신고앱"
            value={projectTitle}
            SubmitValue={setProjectTitle}
          />
        </Section>
        <Section>
          <SectionTitle>(필수) 대표 이미지</SectionTitle>
          <SectionInfo>
            * 프로젝트 썸네일로 보여질 이미지를 선택해주세요.
          </SectionInfo>
          <ProjectImageWrapper>
            <ProjectImage>
              {thumbnail.length > 0 ? (
                <ProjectThumbnail src={thumbnail} alt="prjoect_thumb" />
              ) : (
                <FaCamera />
              )}
            </ProjectImage>
            <UploadWrapper>
              <Button
                ButtonColor="white"
                ButtonMode="active"
                ButtonSize="medium"
                ButtonName="이미지 업로드"
              />
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
            {sampleImages.map((image) => (
              <ProjectImageAltImage
                key={image.alt}
                src={image.url}
                alt={image.alt}
                onClick={() => setThumbnail(image.url)}
              />
            ))}
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
            <Button
              ButtonColor="lightGray"
              ButtonSize="medium"
              ButtonMode="active"
              ButtonName="초기화"
            />
            <Button
              ButtonColor="red"
              ButtonSize="medium"
              ButtonMode="active"
              ButtonName="입력칸만"
            />
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
          <SelectBox
            Mode="location"
            DefaultValue={location}
            SubmitValue={setLocation}
          />
        </Section>
        <Section>
          <SectionTitle>(필수) 모집인원</SectionTitle>
          <SectionInfo>
            * 나중에 변경/추가가 가능합니다. 3~4명을 추천합니다.
          </SectionInfo>
          <RecruitWrapper>
            <SelectBox Mode="pos" DefaultValue={pos} SubmitValue={setPos} />
            <CountWrapper>
              <i>-</i>
              <span className="cnt">1</span>
              <i>+</i>
            </CountWrapper>
            <TwoBtnWrapper>
              <Button
                ButtonColor="darkblue"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="삭제"
              />
              <Button
                ButtonColor="white"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="추가"
              />
            </TwoBtnWrapper>
          </RecruitWrapper>
        </Section>
        <Section>
          <SectionTitle>(필수) 요구레벨</SectionTitle>
          <SectionInfo>
            프로젝트에 필요한 팀원의 레벨을 선택해주세요.
          </SectionInfo>
          <SelectBox Mode="level" DefaultValue={level} SubmitValue={setLevel} />
        </Section>
        <Section>
          <SectionTitle>(필수) 프로젝트 기간</SectionTitle>
          <SectionInfo>프로젝트의 진행 기간을 선택해주세요.</SectionInfo>
          <DateWrapper>
            <ProjectDateTitle>프로젝트 시작일: </ProjectDateTitle>
            <SDatePicker
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              minDate={new Date()}
              startDate={startDate}
              endDate={endDate}
            />
          </DateWrapper>
          <DateWrapper>
            <ProjectDateTitle>프로젝트 종료일: </ProjectDateTitle>
            <SDatePicker
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </DateWrapper>
        </Section>
        <Section>
          <SectionTitle>(선택) 참고 자료 (최대 5개)</SectionTitle>
          <SectionInfo>
            * 벤치마킹하는 서비스나, 프로젝트를 정리하신 자료의 웹주소를
            등록해주세요.
          </SectionInfo>
          <RefWrapper>
            <InputBox
              InputBoxSize="xl"
              InputBoxType="active"
              placeholder="URL을 입력헤주세요"
              value={referenceUrl}
              SubmitValue={setReferenceUrl}
            />
            <TwoBtnWrapper>
              <Button
                ButtonColor="darkblue"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="삭제"
              />
              <Button
                ButtonColor="white"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="추가"
              />
            </TwoBtnWrapper>
          </RefWrapper>
        </Section>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="작성 완료"
        />
      </Content>
    </>
  );
}

export default BuildProject;
