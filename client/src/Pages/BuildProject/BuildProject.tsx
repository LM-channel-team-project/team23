import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { LOCAL_HOST, PROJECT_SERVER } from '../../Config';
import { sampleImages } from '../../Components/BuildProject/sampleImages';
import { FieldData } from '../../Components/Common/OptionData';
import Button from '../../Components/Common/Button';
import SelectBox from '../../Components/Common/SelectBox';
import InputBox from '../../Components/Common/InputBox';
import DescriptionInput from '../../Components/BuildProject/DescriptionInput';
import RecruitSelect from '../../Components/BuildProject/RecruitSelect';
import ReferenceInput from '../../Components/BuildProject/ReferenceInput';
import ProjectDuration from '../../Components/BuildProject/ProjectDuration';
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

const TwoBtnWrapper = styled.div`
  & button {
    margin-left: 0;
  }
`;

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
  const [positions, setPositions] = useState([
    { pos: 'none', required: 1, current: 0 },
  ]);
  const [level, setLevel] = useState('level0');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [referencesUrl, setReferencesUrl] = useState(['']);
  const history = useHistory();
  const handleClickRadioButton = (value: string) => setField(value);

  const handleSapmleImgClick = (url: string) => {
    if (thumbImageFile) {
      setThumbnailFile(null);
    }
    setThumbnailUrl(url);
  };

  const handleAddPosClick = () => {
    setPositions([...positions, { pos: 'none', required: 1, current: 0 }]);
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

  const submitThumbnailFile = async () => {
    if (!thumbImageFile) return null;

    const thumbnailFormData = new FormData();
    thumbnailFormData.append('projectImg', thumbImageFile);

    const { data } = await axios.post(
      `${PROJECT_SERVER}/updateImg`,
      thumbnailFormData,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    );

    if (data.success) {
      return data.filePath;
    } else {
      throw data.err;
    }
  };

  const removeHTMLTags = (text: string) => {
    return text.replace(/(<([^>]+)>)/gi, '').substring(0, 50);
  };

  const fetchDescriptionPath = async () => {
    const textData = {
      text: description,
    };
    const { data } = await axios.post(`${PROJECT_SERVER}/updateText`, textData);
    if (data.success) {
      return data.filePath;
    } else {
      throw data.err;
    }
  };

  const userId = localStorage.getItem('userId');

  const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const thumbnailPath: unknown | string = await submitThumbnailFile();
      const descriptionPath = await fetchDescriptionPath();
      const summary = removeHTMLTags(description);
      const userId = localStorage.getItem('userId');
      const formData = {
        title: projectTitle,
        thumb: thumbnailPath ? `${LOCAL_HOST}/${thumbnailPath}` : thumbnailUrl,
        info: descriptionPath,
        summary,
        field,
        area: location,
        position: positions,
        referenceURL: referencesUrl,
        startAt: startDate,
        endAt: endDate,
        projectLV: level,
        receivedLike: 0,
        writer: userId,
      };
      const { data } = await axios.post(
        `${PROJECT_SERVER}/buildProject`,
        formData
      );
      if (data.success) {
        alert('????????? ????????? ?????????????????????.');
        history.push('/project');
      } else {
        throw data.err;
      }
    } catch (error) {
      alert(`????????? ??????????????????. ${error}`);
      window.location.reload();
    }
  };

  return (
    <>
      <Header>
        <Title>???????????? ??????</Title>
        <SubTitle>
          ????????? ?????? ??????????????? ????????? ?????? ????????? ???????????????!
        </SubTitle>
      </Header>
      <Content>
        <Section>
          <SectionTitle>(??????) ???????????????</SectionTitle>
          <SectionInfo>
            * ???????????? ?????????????????? ??????????????? ???????????? ???????????????.
          </SectionInfo>
          <InputBox
            InputBoxSize="xl"
            InputBoxType="active"
            placeholder="3~15 ????????? ??????????????? ???) ???????????? ?????????"
            value={projectTitle}
            SubmitValue={setProjectTitle}
          />
        </Section>
        <Section>
          <SectionTitle>(??????) ?????? ?????????</SectionTitle>
          <SectionInfo>
            * ???????????? ???????????? ????????? ???????????? ??????????????????.
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
                * ??????/????????? ????????? 2:1??? ??? ???????????? ?????? ????????????.
              </SectionInfo>
              <SectionInfo>
                * ???????????? ???????????? ?????? ????????? ????????? ????????????.
              </SectionInfo>
            </UploadWrapper>
          </ProjectImageWrapper>
          <ProjectImageAltInfo>
            ???????????? ????????? ????????? ???????????? ???????????? ??????????????????.
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
          <SectionTitle>(??????) ???????????? ??????</SectionTitle>
          <SectionInfo>
            * ????????? ????????? ???????????????, ?????? ??????????????? ?????? ???????????? 50%
            ????????????.
          </SectionInfo>
          <DescriptionInput value={description} submitValue={setDescription} />
        </Section>
        <Section>
          <SectionTitle>(??????) ???????????? ??????</SectionTitle>
          <SectionInfo>* ?????? ?????? ?????? ???????????? ??????????????????.</SectionInfo>
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
          <SectionTitle>(??????) ??????</SectionTitle>
          <SectionInfo>* ????????? ??????????????????.</SectionInfo>
          <SelectBox
            Mode="location"
            DefaultValue={location}
            SubmitValue={setLocation}
          />
        </Section>
        <Section>
          <SectionTitle>(??????) ????????????</SectionTitle>
          <SectionInfo>
            * ????????? ??????/????????? ???????????????. 3~4?????? ???????????????.
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
              ButtonName="??????"
              onClick={handleDeletePosClick}
            />
            <Button
              ButtonColor="white"
              ButtonMode="active"
              ButtonSize="small"
              ButtonName="??????"
              onClick={handleAddPosClick}
            />
          </TwoBtnWrapper>
        </Section>
        <Section>
          <SectionTitle>(??????) ????????????</SectionTitle>
          <SectionInfo>
            ??????????????? ????????? ????????? ????????? ??????????????????.
          </SectionInfo>
          <SelectBox Mode="level" DefaultValue={level} SubmitValue={setLevel} />
        </Section>
        <Section>
          <SectionTitle>(??????) ???????????? ??????</SectionTitle>
          <SectionInfo>??????????????? ?????? ????????? ??????????????????.</SectionInfo>
          <ProjectDuration
            start={startDate}
            end={endDate}
            submitStart={setStartDate}
            submitEnd={setEndDate}
          />
        </Section>
        <Section>
          <SectionTitle>(??????) ?????? ?????? (?????? 5???)</SectionTitle>
          <SectionInfo>
            * ?????????????????? ????????????, ??????????????? ???????????? ????????? ????????????
            ??????????????????.
          </SectionInfo>
          <RefWrapper>
            {referencesUrl.map((url, index) => (
              <ReferenceInput
                key={index}
                placeholder={'URL??? ??????????????????'}
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
                ButtonName="??????"
                onClick={handleDeleteReferenceClick}
              />
              <Button
                ButtonColor="white"
                ButtonMode="active"
                ButtonSize="small"
                ButtonName="??????"
                onClick={handleAddReferenceClick}
              />
            </TwoBtnWrapper>
          </RefWrapper>
        </Section>
        <Button
          ButtonColor="red"
          ButtonMode="active"
          ButtonSize="medium"
          ButtonName="?????? ??????"
          onClick={onSubmit}
        />
      </Content>
    </>
  );
}

export default BuildProject;
