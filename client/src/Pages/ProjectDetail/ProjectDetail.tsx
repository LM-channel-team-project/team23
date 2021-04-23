import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectDtailHeader from '../../Components/ProjectDetail/ProjectDtailHeader';
import ProjectTab from '../../Components/ProjectDetail/ProjectTab';
import Info from '../../Components/ProjectDetail/Info';
import Question from '../../Components/ProjectDetail/Question';

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

  const handleChangeTab = () => {
    if (currentTab === 1) {
      setCurrentTab(0);
    } else {
      setCurrentTab(1);
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
      </ProjectPageWrap>
    </Container>
  );
};

export default ProjectDetail;
