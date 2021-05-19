import React, { useState } from 'react';
import styled from 'styled-components';
import SelectBox from '../Common/SelectBox';

const SearchOption = styled.div``;

const PeopleSearchOption = () => {
  const [location, setLocation] = useState('');
  const [pos, setPos] = useState('');
  const [projectState, setProjectState] = useState('');

  return (
    <SearchOption>
      <SelectBox
        Mode="location"
        DefaultValue={location}
        SubmitValue={setLocation}
      />
      <SelectBox Mode="pos" DefaultValue={pos} SubmitValue={setPos} />
      <SelectBox
        Mode="projectState"
        DefaultValue={projectState}
        SubmitValue={setProjectState}
      />
    </SearchOption>
  );
};

export default PeopleSearchOption;
