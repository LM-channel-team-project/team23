import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../Common/Checkbox';
import SelectBox from '../Common/SelectBox';

const SearchOption = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  margin-left: 8px;
`;

const ProjectSearchOption = () => {
  const [location, setLocation] = useState('');
  const [field, setField] = useState('');
  const [pos, setPos] = useState('');
  const [level, setLevel] = useState('');
  const [state, setState] = useState(true);
  const handleCheckboxChange = () => {
    setState((prev) => !prev);
  };

  return (
    <SearchOption>
      <SelectBox
        Mode="location"
        DefaultValue={location}
        SubmitValue={setLocation}
      />
      <SelectBox Mode="field" DefaultValue={field} SubmitValue={setField} />
      <SelectBox Mode="pos" DefaultValue={pos} SubmitValue={setPos} />
      <SelectBox Mode="level" DefaultValue={level} SubmitValue={setLevel} />
      <Label>
        <Checkbox checked={state} onChange={handleCheckboxChange} />
        <Text>모집중</Text>
      </Label>
    </SearchOption>
  );
};

export default ProjectSearchOption;
