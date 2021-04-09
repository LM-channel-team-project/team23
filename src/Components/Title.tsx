import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.div`
  margin: 0.8rem;
  margin-left: 0.5rem;
`;

const SubtitleStyle = styled.h3`
  font-size: 18px;
  padding: 0.2rem;
  color: #fd6f22;
  font-weight: bolder;
`;

const MaintitleStyle = styled.h2`
  font-size: 18px;
  padding: 0.2rem;
  color: #353535;
`;

interface titleProps {
  subtitle: string;
  title: string;
}

const Title = ({ subtitle, title }: titleProps) => (
  <TitleStyle>
    <SubtitleStyle>{subtitle}</SubtitleStyle>
    <MaintitleStyle>{title}</MaintitleStyle>
  </TitleStyle>
);

export default Title;
