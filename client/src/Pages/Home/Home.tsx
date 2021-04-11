import React from 'react';
import Title from '../../Components/Common/Title';
import PersonBoxList from '../../Components/PersonBoxList';
import ProjectBox from '../../Components/Project/ProjectBox';
import Info from '../../Components/Home/Info';
import styled from 'styled-components';

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
        <ProjectBox />
      </div>
      <div className="join_project content">
        <Title subtitle="Study With Us" title="모집중인 프로젝트를 둘러봐요" />
        <ProjectBox />
      </div>
      <div className="new_user content">
        <Title subtitle="New Co-Worker" title="가입을 축하드려요" />
        <PersonBoxList />
      </div>
      <div className="find_coworker content">
        <Title subtitle="Be my Co-Worker" title="동료를 찾아보세요" />
        <PersonBoxList />
        <PersonBoxList />
      </div>
    </ContentWrapper>
  </Style>
);

export default Home;
