import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectDtailHeader from '../../../Components/Project/ProjectDetail/ProjectDetailHeader';
import ProjectTab from '../../../Components/Project/ProjectDetail/ProjectTab';
import Info from '../../../Components/Project/ProjectDetail/Info';
import Question from '../../../Components/Project/ProjectDetail/Question';
import RightMenu from '../../../Components/Project/ProjectDetail/RightMenu';

const Container = styled.section``;

const ProjectPageWrap = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Contents = styled.div`
  max-width: 840px;
  width: 100%;
  padding: 0 0 40px;
  margin: 0;
`;

const ProjectDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (index: number) => {
    if (currentTab !== index) {
      setCurrentTab(index);
    }
  };

  return (
    <Container>
      <ProjectDtailHeader />
      <ProjectPageWrap>
        <Contents>
          <ProjectTab current={currentTab} onClick={handleChangeTab} />
          {currentTab === 0 && <Info />}
          {currentTab === 1 && <Question />}
        </Contents>
        <RightMenu />
      </ProjectPageWrap>
    </Container>
  );
};

export default ProjectDetail;
