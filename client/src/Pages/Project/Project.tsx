import React from 'react';
import styled from 'styled-components';
import ProjectHeader from '../../Components/Project/ProjectHeader';
import ProjectRecommend from '../../Components/Project/ProjectRecommend';
import ProjectRecommendBox from '../../Components/Project/ProjectRecommendBox';
import ProjectBox from '../../Components/Project/ProjectBox';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0px auto 30px;
  height: 100%;
  min-height: 100vh;
`;

const Project = () => (
  <Container>
    <ProjectHeader />
    <ProjectRecommend>
      <ProjectRecommendBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_2.png"
        category="게임"
      />
      <ProjectRecommendBox
        title="IT업무툴 리뷰 플랫폼"
        description="1. 프로젝트 필요성-점점 더 다양해지는 IT업무툴을 비교하거나 리뷰 등 필요한 정보를 한번에 볼 수 있는 플랫폼이 아직 국내에는 없는 상황입니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_1.png"
        category="게임"
      />{' '}
      <ProjectRecommendBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_2.png"
        category="게임"
      />{' '}
      <ProjectRecommendBox
        title="IT업무툴 리뷰 플랫폼"
        description="1. 프로젝트 필요성-점점 더 다양해지는 IT업무툴을 비교하거나 리뷰 등 필요한 정보를 한번에 볼 수 있는 플랫폼이 아직 국내에는 없는 상황입니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_1.png"
        category="게임"
      />{' '}
      <ProjectRecommendBox
        title="간단한 웹 게임 사이드 프로젝트"
        description="안녕하세요! 팀원 모집하고 있습니다!! 간단한 웹 게임 서비스를 생각하고 있습니다. 실력 상관 없이 즐겁게 하면 좋겠습니다."
        image="https://letspl.s3.ap-northeast-2.amazonaws.com/images/projectThumb_2.png"
        category="게임"
      />
    </ProjectRecommend>
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
