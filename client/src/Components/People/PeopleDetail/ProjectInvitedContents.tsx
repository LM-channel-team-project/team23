import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../Components/Common/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 1.2rem;
  align-items: center;
`;

const SelectArea = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
`;

const Select = styled.select`
  width: 300px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  padding-left: 20px;
  font-size: 12px;
  appearance: none;
  background-size: 10px 5px;
  background-position: 90%;
  background-repeat: no-repeat;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSA1LjI1bC01LTVoMTBsLTUgNXoiIGZpbGw9IiM0MjQ5NUIiLz48L3N2Zz4=);
`;

const Option = styled.option`
  text-align: center;
  margin: 1.2rem;
  color: ${(props) => props.theme.palette.gray};
  padding: 0px 2px 1px;
`;

const ProjectInvitedContents = () => {
  const [selectProject, setSelectProject] = useState('');
  const handleChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectProject(event.currentTarget.value);
  };
  return (
    <Container>
      <h2>함께 할 프로젝트를 골라주세요.</h2>
      <SelectArea>
        <Select value={selectProject} onChange={handleChangeSelect}>
          <Option value="프로젝트ID">프로젝트 제목</Option>
          <Option value="프로젝트ID">프로젝트 리스트1</Option>
          <Option value="프로젝트ID">프로젝트 리스트2</Option>
        </Select>
      </SelectArea>
      <Button
        ButtonColor="red"
        ButtonMode="active"
        ButtonSize="xLarge"
        ButtonName="프로젝트 초대하기"
      />
    </Container>
  );
};

export default ProjectInvitedContents;
