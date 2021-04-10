import React from 'react';
import styled from 'styled-components';

const SearchOption = styled.div`
  @media screen and (max-width: 750px) {
    display: flex;
    justify-content: space-around;
  }
`;

const Select = styled.select`
  max-width: 140px;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  background-color: ${(props) => props.theme.palette.white};
  border: 1px solid ${(props) => props.theme.palette.lightGray};
  border-radius: 4px;
  font-size: 0.6875rem;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Option = styled.option``;

const ProjectSearchOption = () => (
  <SearchOption>
    <Select>
      <Option>스킬</Option>
      <Option>React</Option>
      <Option>Vue</Option>
    </Select>
    <Select>
      <Option>요구레벨</Option>
      <Option>LV 1</Option>
      <Option>LV 2</Option>
      <Option>LV 3</Option>
      <Option>LV 4</Option>
      <Option>LV 5</Option>
      <Option>LV 6</Option>
      <Option>LV 7</Option>
      <Option>LV 8</Option>
    </Select>
    <Select>
      <Option>상태</Option>
      <Option>모집중</Option>
      <Option>모집완료</Option>
      <Option>잠시중단</Option>
    </Select>
  </SearchOption>
);

export default ProjectSearchOption;
