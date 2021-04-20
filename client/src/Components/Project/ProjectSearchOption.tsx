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

const ProjectSearchOption = () => (
  <SearchOption>
    <Select>
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
      <Option value="KR99">상관없음</Option>
    </Select>
    <Select>
      <Option>분야</Option>
      <Option>웹</Option>
      <Option>앱</Option>
      <Option>게임</Option>
    </Select>
    <Select>
      <Option>모집분야</Option>
      <Option>IOS</Option>
      <Option>안드로이드</Option>
      <Option>웹프론트엔드</Option>
      <Option>크로스플랫폼</Option>
      <Option>웹서버</Option>
      <Option>블록체인</Option>
      <Option>AI</Option>
      <Option>DB</Option>
      <Option>빅데이터</Option>
      <Option>게임</Option>
    </Select>
    <Select>
      <Option>요구레벨</Option>
      <Option>6개월미만</Option>
      <Option>1년이상</Option>
      <Option>3년이상</Option>
    </Select>
  </SearchOption>
);

export default ProjectSearchOption;
