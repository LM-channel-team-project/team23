import React, { useEffect } from 'react';
import querystring from 'query-string';
import Title from '../../Components/Common/Title';
import MypageTab from '../../Components/Mypage/Tab';
import InfoBox from '../../Components/Mypage/InfoBox';
import styled from 'styled-components';
import ProfilePage from '../../Components/Mypage/ProfilePage';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLikeProjects, fetchMyLikeProjects } from '../../modules/like';
import { RootState } from '../../modules';
import { sampleImages } from '../../Components/BuildProject/sampleImages';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: relative;
  top: 50px;
  bottom: 270px;
  padding: 35px 5px 0 5px;
`;

const InfoContainer = styled.div`
  margin-bottom: 4.5rem;
`;

function Mypage() {
  const {
    myLikeProjects: { projects },
    likeProjects: { projects: likeProjects },
  } = useSelector((state: RootState) => state.like);
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const projectsArray = projects.map((project) => project.ProjectId);
  const type = { info: false, project: false, favorite: false, alarm: false };
  const query = querystring.parse(location.search);
  const tab = query.tab;

  switch (tab) {
    case 'project':
      type.project = true;
      break;
    case 'favorite':
      type.favorite = true;
      break;
    case 'alarm':
      type.alarm = true;
      break;
    default:
      type.info = true;
  }

  // if (tab === 'project') {
  //   type.project = true;
  // } else if (tab === 'favorite') {
  //   type.favorite = true;
  // } else if (tab === 'alarm') {
  //   type.alarm = true;
  // } else {
  //   type.info = true;
  // }

  useEffect(() => {
    dispatch(fetchMyLikeProjects({ id: userId }));
  }, [likeProjects]);

  useEffect(() => {
    dispatch(fetchLikeProjects());
  }, []);

  return (
    <Container>
      <Title subtitle="LET`s study" title="마이페이지" />
      <MypageTab
        info={type.info}
        project={type.project}
        favorite={type.favorite}
        alarm={type.alarm}
      />
      {type.info && <ProfilePage />}
      <InfoContainer>
        {type.project && (
          <>
            <InfoBox
              title="지원한 프로젝트"
              array={[]}
              defaultText="지원한 프로젝트가 없습니다."
              type="project"
            />
            <InfoBox
              title="진행중인 프로젝트"
              array={[]}
              defaultText="진행중인 프로젝트가 없습니다."
              type="project"
            />
          </>
        )}
        {type.favorite && (
          <>
            <InfoBox
              title="구독중인 프로젝트"
              array={projectsArray}
              defaultText="구독중인 프로젝트가 없습니다."
              type="project"
            />
            <InfoBox
              title="구독중인 사람"
              array={[]}
              defaultText="구독중인 사람이 없습니다."
              type="user"
            />
          </>
        )}
        {type.alarm && (
          <InfoBox
            title="알람"
            array={[]}
            defaultText="알림 내용이 없습니다."
            type="alarm"
          />
        )}
      </InfoContainer>
    </Container>
  );
}

export default Mypage;
