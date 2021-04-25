import React from 'react';
import styled from 'styled-components';
import ProjectHeader from '../../Components/Project/ProjectHeader';
import ProjectBox from '../../Components/Project/ProjectBox';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  height: 100%;
  min-height: 100vh;
`;

const Project = () => (
  <Container>
    <ProjectHeader />
    <ProjectBoxList>
      <ProjectBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
        state={[1, 4]}
        category="게임"
      />
      <ProjectBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!!"
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
        state={[3, 5]}
        category="게임"
      />
      <ProjectBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!!"
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
        state={[4, 4]}
        category="게임"
      />
      <ProjectBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!!"
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_6.png"
        state={[3, 3]}
        category="게임"
      />
    </ProjectBoxList>
  </Container>
);

export default Project;
