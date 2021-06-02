import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { sampleImages } from '../../Components/BuildProject/sampleImages';
import { FieldData } from '../../Components/Common/OptionData';
import Button from '../../Components/Common/Button';
import SelectBox from '../../Components/Common/SelectBox';
import InputBox from '../../Components/Common/InputBox';
import DescriptionInput from '../../Components/BuildProject/DescriptionInput';
import RecruitSelect from '../../Components/BuildProject/RecruitSelect';
import ReferenceInput from '../../Components/BuildProject/ReferenceInput';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import ImgUploadBtn from '../../Components/BuildProject/ImgUploadBtn';

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
    margin: 0.5rem 0;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const FieldWrapper = styled.div`
  margin: 1.5rem 0;
`;
const FieldLabel = styled.label`
  font-size: 16px;
  margin-right: 3rem;
`;
const FieldCheckbox = styled.input.attrs({
  type: 'radio',
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

const TwoBtnWrapper = styled.div`
  & button {
    margin-left: 0;
  }
`;

const DateWrapper = styled.div``;
const RefWrapper = styled.div`
  & input {
    margin-left: 0;
  }
`;

function BuildProject() {
  const [projectTitle, setProjectTitle] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState(sampleImages[0].url);
  const [thumbImageFile, setThumbnailFile] = useState<null | File>(null);
  const [description, setDescription] = useState('');
  const [field, setField] = useState('F1');
  const [location, setLocation] = useState('A0');
  const [positions, setPositions] = useState([{ pos: 'none', count: 1 }]);
  const [level, setLevel] = useState('level1');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [referencesUrl, setReferencesUrl] = useState(['']);

  const handleClickRadioButton = (value: string) => setField(value);

  const handleSapmleImgClick = (url: string) => {
    if (thumbImageFile) {
      setThumbnailFile(null);
    }
    setThumbnailUrl(url);
  };

  const handleAddPosClick = () => {
    setPositions([...positions, { pos: 'none', count: 1 }]);
  };

  const handleDeletePosClick = () => {
    if (positions.length !== 1) {
      const newPositons = [...positions];
      newPositons.splice(-1, 1);
      setPositions(newPositons);
    }
  };

  const handleAddReferenceClick = () => {
    if (referencesUrl.length < 5) {
      setReferencesUrl([...referencesUrl, '']);
    }
  };

  const handleDeleteReferenceClick = () => {
    if (referencesUrl.length !== 1) {
      const newReferences = [...referencesUrl];
      newReferences.splice(-1, 1);
      setReferencesUrl(newReferences);
    }
  };

  const submitThumbnailFile = () => {
    return new Promise((resolve, reject) => {
      if (thumbImageFile) {
        const thumbnailFormData = new FormData();
        thumbnailFormData.append('projectImg', thumbImageFile);
        axios
          .post('/api/project/updateImg', thumbnailFormData, {
            headers: { 'content-type': 'multipart/form-data' },
          })
          .then((response) => {
            if (response.data.success) {
              resolve(response.data.filePath);
            } else {
              reject(response.data.err);
            }
          });
      }
    });
  };

  const fetchDescriptionPath = () => {
    return new Promise((resolve, reject) => {
      const textData = {
        text: description,
      };
      axios.post('/api/project/updateText', textData).then((response) => {
        if (response.data.success) {
          resolve(response.data.filePath);
        } else {
          reject(response.data.err);
        }
      });
    });
  };

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      let thumbnailPath: unknown | string;
      if (thumbImageFile) {
        thumbnailPath = await submitThumbnailFile();
      }
      const descriptionPath = await fetchDescriptionPath();
      console.log(descriptionPath);

      // const formData = {
      //   title: projectTitle,
      //   thumb: thumbnailPath ? thumbnailPath : thumbnailUrl,
      //   // ... (전송데이터들 작성)
      // };

      // axios.post('/api/project/buildProject', formData)
      // .then(response=>)
      alert('작성 완료');
    } catch (error) {
      alert(`오류가 발생했습니다. ${JSON.stringify(error)}`);
      window.location.reload();
    }
  };

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
              <ProjectThumbnail src={thumbnailUrl} alt="prjoect_thumb" />
            </ProjectImage>
            <UploadWrapper>
              <ImgUploadBtn
                submitUrl={setThumbnailUrl}
                submitFile={setThumbnailFile}
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
                onClick={() => handleSapmleImgClick(image.url)}
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
          <DescriptionInput value={description} submitValue={setDescription} />
        </Section>
        <Section>
          <SectionTitle>(필수) 프로젝트 분야</SectionTitle>
          <SectionInfo>* 아래 분야 중에 한가지를 선택해주세요.</SectionInfo>
          <FieldWrapper>
            {FieldData.slice(1).map((fieldItem) => (
              <React.Fragment key={fieldItem.value}>
                <FieldCheckbox
                  id={fieldItem.value}
                  checked={field === fieldItem.value}
                  onChange={() => handleClickRadioButton(fieldItem.value)}
                />
                <FieldLabel htmlFor={fieldItem.value}>
                  {fieldItem.label}
                </FieldLabel>
              </React.Fragment>
            ))}
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
          {positions.map((pos, index) => (
            <RecruitSelect
              key={index}
              positions={positions}
              value={pos}
              submitValue={setPositions}
              index={index}
            />
          ))}
          <TwoBtnWrapper>
            <Button
              ButtonColor="darkblue"
              ButtonMode="active"
              ButtonSize="small"
              ButtonName="삭제"
              onClick={handleDeletePosClick}
            />
            <Button
              ButtonColor="white"
              ButtonMode="active"
              ButtonSize="small"
              ButtonName="추가"
              onClick={handleAddPosClick}
            />
          </TwoBtnWrapper>
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
              selected={startDate > endDate ? startDate : endDate}
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
            {referencesUrl.map((url, index) => (
              <ReferenceInput
                key={index}
                placeholder={'URL을 입력해주세요'}
                referencesUrl={referencesUrl}
                value={url}
                submitValue={setReferencesUrl}
                index={index}
              />
            ))}
            <TwoBtnWrapper>
              <Button
                ButtonColor="darkblue"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="삭제"
                onClick={handleDeleteReferenceClick}
              />
              <Button
                ButtonColor="white"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="추가"
                onClick={handleAddReferenceClick}
              />
            </TwoBtnWrapper>
          </RefWrapper>
        </Section>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="작성 완료"
          onClick={onSubmit}
        />
      </Content>
    </>
  );
}

export default BuildProject;
