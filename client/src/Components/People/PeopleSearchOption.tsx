import React from 'react';
import styled from 'styled-components';

const SearchOption = styled.div``;
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
const Optgroup = styled.optgroup``;

const PeopleSearchOption = () => (
  <SearchOption>
    <Select id="location">
      <Option value="KR00">지역 미지정</Option>
      <Option value="KR01">서울특별시</Option>
      <Option value="KR02">경기도</Option>
      <Option value="KR03">부산광역시</Option>
      <Option value="KR04">인천광역시</Option>
      <Option value="KR05">대구광역시</Option>
      <Option value="KR06">경상남도</Option>
      <Option value="KR07">경상북도</Option>
      <Option value="KR08">대전광역시</Option>
      <Option value="KR09">충청남도</Option>
      <Option value="KR10">충청북도</Option>
      <Option value="KR11">전라남도</Option>
      <Option value="KR12">전라북도</Option>
      <Option value="KR13">광주광역시</Option>
      <Option value="KR14">강원도</Option>
      <Option value="KR15">울산광역시</Option>
      <Option value="KR16">제주특별자치도</Option>
      <Option value="KR17">세종특별자치시</Option>
    </Select>
    <Select id="job">
      <Option value="0000">직무</Option>
      <Option value="0401">IOS</Option>
      <Option value="0402">안드로이드</Option>
      <Option value="0403">웹프론트엔드</Option>
      <Option value="0405">크로스플랫폼</Option>
      <Option value="0406">웹 서버</Option>
      <Option value="0407">블록체인</Option>
      <Option value="0408">AI</Option>
      <Option value="0409">DB/빅데이터</Option>
      <Option value="0410">게임</Option>
    </Select>
    <Select id="project-state">
      <Option value="00">프로젝트 상태</Option>
      <Option value="01">미참여 중</Option>
      <Option value="02">참여 중</Option>
    </Select>
  </SearchOption>
);

export default PeopleSearchOption;
