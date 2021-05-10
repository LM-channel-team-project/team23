import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../Components/Project/Checkbox';
import SelectBox from '../Common/SelectBox';

const SearchOption = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  max-width: 140px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  border-radius: 4px;
  font-size: 0.6875rem;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Option = styled.option``;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 8px;
`;

const ProjectSearchOption = () => {
  const [pos, setPos] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');
  const [checked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <SearchOption>
      <SelectBox
        Mode="location"
        DefaultValue={location}
        SubmitValue={setLocation}
      />
      <Select>
        <Option>분야</Option>
        <Option>웹</Option>
        <Option>앱</Option>
        <Option>게임</Option>
      </Select>
      <SelectBox Mode="pos" DefaultValue={pos} SubmitValue={setPos} />
      <SelectBox Mode="level" DefaultValue={level} SubmitValue={setLevel} />
      <Label>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <Text>모집중</Text>
      </Label>
    </SearchOption>
  );
};

export default ProjectSearchOption;
