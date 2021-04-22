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
    </Select>
    <Select>
      <Option value="0000">직무</Option>
      <Optgroup label="기획">
        <Option value="0201">UI/UX기획</Option>
        <Option value="0202">게임기획</Option>
        <Option value="0203">프로젝트 매니저</Option>
        <Option value="0204">하드웨어(제품) 기획</Option>
      </Optgroup>
      <Optgroup label="디자인">
        <Option value="0301">그래픽디자인</Option>
        <Option value="0302">UI/UX디자인</Option>
        <Option value="0303">3D디자인</Option>
        <Option value="0304">하드웨어(제품) 디자인</Option>
        <Option value="0305">기타</Option>
      </Optgroup>
      <Optgroup label="프론트엔드 개발">
        <Option value="0401">IOS</Option>
        <Option value="0402">안드로이드</Option>
        <Option value="0403">웹프론트엔드</Option>
        <Option value="0404">웹퍼블리셔</Option>
        <Option value="0405">크로스플랫폼</Option>
      </Optgroup>
      <Optgroup label="백엔드 개발">
        <Option value="0501">웹 서버</Option>
        <Option value="0504">블록체인</Option>
        <Option value="0505">AI</Option>
        <Option value="0503">DB/빅데이터/DS</Option>
        <Option value="0502">게임 서버</Option>
      </Optgroup>
      <Optgroup label="사업">
        <Option value="0101">사업기획/개발</Option>
        <Option value="0102">마케팅</Option>
        <Option value="0103">재무/회계</Option>
        <Option value="0104">영업</Option>
        <Option value="0105">사업(그외)</Option>
      </Optgroup>
      <Optgroup label="기타">
        <Option value="0601">사운드</Option>
        <Option value="0602">영상</Option>
        <Option value="0603">운영</Option>
        <Option value="0604">QA</Option>
        <Option value="0605">기타</Option>
      </Optgroup>
    </Select>
    <Select>
      <Option value="00">프로젝트 소속</Option>
      <Option value="01">미참여 중</Option>
      <Option value="02">참여 중</Option>
    </Select>
  </SearchOption>
);

export default PeopleSearchOption;
