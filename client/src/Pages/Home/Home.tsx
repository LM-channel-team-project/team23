import React from 'react';
import Title from '../../Components/Common/Title';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';
import ProjectBox from '../../Components/Project/ProjectBox';
import Info from '../../Components/Home/Info';
import styled from 'styled-components';
import PeopleList from '../../Components/People/PeopleList';

const Style = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .content {
    margin-bottom: 5rem;
  }
`;

const Home = () => (
  <Style>
    <Info />
    <ContentWrapper>
      <div className="new_project content">
        <Title subtitle="New Project" title="신규 프로젝트가 나왔어요" />
        <ProjectBoxList>
          <ProjectBox
            title="간단한 웹 게임 사이드 프로젝트"
            description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
            image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
            state={[1, 4]}
            category="게임"
          />
        </ProjectBoxList>
      </div>
      <div className="join_project content">
        <Title subtitle="Study With Us" title="모집중인 프로젝트를 둘러봐요" />
        <ProjectBoxList>
          <ProjectBox
            title="채팅 어플 서비스"
            description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 채팅 어플 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
            image="https://letspl.s3.ap-northeast-2.amazonaws.com/user/459/images/54754526-675ca280-4bec-11e9-8548-c8e50f5eca1b.png"
            state={[3, 5]}
            category="엔터테이먼트"
          />
        </ProjectBoxList>
      </div>
      <div className="new_user content">
        <Title subtitle="New Co-Worker" title="가입을 축하드려요" />
        <PeopleList />
      </div>
      <div className="find_coworker content">
        <Title subtitle="Be my Co-Worker" title="동료를 찾아보세요" />
        <PeopleList />
      </div>
    </ContentWrapper>
  </Style>
);

export default Home;
