import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../Common/Title';
import PeopleSearchOption from './PeopleSearchOption';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0;
`;

interface IProps {
  location: string;
  pos: string;
  projectState: string;
  submitLocation: React.Dispatch<React.SetStateAction<string>>;
  submitPos: React.Dispatch<React.SetStateAction<string>>;
  submitProjectState: React.Dispatch<React.SetStateAction<string>>;
}

const PeopleHeader = ({
  location,
  pos,
  projectState,
  submitLocation,
  submitPos,
  submitProjectState,
}: IProps) => {
  return (
    <Header>
      <Title subtitle="LET`s with" title="멤버 모집하기" />
      <PeopleSearchOption
        Location={location}
        Pos={pos}
        ProjectState={projectState}
        SubmitLocation={submitLocation}
        SubmitPos={submitPos}
        SubmitProjectState={submitProjectState}
      />
    </Header>
  );
};

export default PeopleHeader;
