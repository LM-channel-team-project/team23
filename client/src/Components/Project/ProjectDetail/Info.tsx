import React from 'react';
import styled from 'styled-components';
import Status from './Status';
import Reference from './Reference';
import { Link } from 'react-router-dom';
import theme from '../../../theme';

const Container = styled.div``;

const Section = styled.div`
  margin-bottom: 35px;
`;

const TabTitle = styled.h3`
  font-size: 1.375rem;
  line-height: 1.4375rem;
  font-weight: 700;
  padding-bottom: 15px;
`;

const P = styled.p`
  line-height: 1.5;
`;

const TabText = styled.p`
  color: ${(props) => props.theme.palette.gray};
`;

interface Ipos {
  pos: string;
  required: number;
  current: number;
}

interface IProps {
  info: string;
  referenceURL: string[];
  nickname: string;
  position: Ipos[];
}

const Info = ({ info, referenceURL, nickname, position }: IProps) => {
  return (
    <Container>
      <Section>
        <Status position={position} />
      </Section>
      <Section>
        <TabTitle>- 소개</TabTitle>
        <div dangerouslySetInnerHTML={{ __html: info }} />
      </Section>
      <Section>
        <TabTitle>- 참고자료</TabTitle>
        {referenceURL.length <= 1 && referenceURL[0] === '' ? (
          <TabText>등록된 참고 자료가 없습니다.</TabText>
        ) : (
          referenceURL.map((item) => <Reference link={item} key={item} />)
        )}
      </Section>
      <Section>
        <TabTitle>리더</TabTitle>
        <Link to={`/people/${nickname}`} style={{ color: theme.palette.jade }}>
          {nickname}
        </Link>
      </Section>
      <Section>
        <TabTitle>멤버</TabTitle>
        214214
      </Section>
    </Container>
  );
};

export default Info;
