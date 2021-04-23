import React from 'react';
import styled from 'styled-components';
import Status from './Status';
import Reference from './Reference';

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

const Info = () => {
  return (
    <Container>
      <Section>
        <Status />
      </Section>
      <Section>
        <TabTitle>- 소개</TabTitle>
        <P>안녕하세요, 1:1 피드백 플랫폼 핏백의 맹철영입니다.</P>
        <P>
          많은 아마추어 창작자가 자신의 작업물에 대한 전문적인 평가를 받을 수
          없습니다. 시장엔 일방향적인 교육 플랫폼만 존재할 뿐이고, 정당한 평가를
          받을 수 있는 플랫폼은 부재하기 때문이죠.
        </P>
        <P>
          <br />
        </P>
        <P>
          자신의 작품에 대한 정당한 평가를 받고 싶은 것은 모든 창작자의 마음일
          것입니다. 핏백은 이러한 니즈에 대한 해결책이 될 수 있습니다. 나의
          작업물을 내가 좋아하는 멘토에게 전달하고, 이에 대한 피드백을 영상물로
          받을 수 있는 서비스입니다.
        </P>
      </Section>
      <Section>
        <TabTitle>- 참고자료</TabTitle>
        <TabText>등록된 참고 자료가 없습니다.</TabText>
        <Reference link="github.com" />
        <Reference link="www.facebook.com" />
      </Section>
    </Container>
  );
};

export default Info;
