import React, { useState, useEffect } from 'react';
import Title from '../../Components/Common/Title';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';
import ProjectBox from '../../Components/Project/ProjectBox';
import Info from '../../Components/Home/Info';
import styled from 'styled-components';
import PeopleList from '../../Components/People/PeopleList';
import axios from 'axios';
import { PROJECT_SERVER, USER_SERVER } from '../../Config';
import { Ipos, IProject } from '../../../../server/models/Project.interface';
import { IUser } from '../../../../server/models/User.interface';

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

//users1은 신규 가입 3명 불러오기 => /api/users/new
//users2는 프로젝트 미참여 중에 3명 불러오기 => api/users/waitList
const Home = () => {
  const [recentProjects, setRecentProjects] = useState<Array<IProject>>([]);
  const [recruitmentProjects, setRecruitmentProjects] = useState<
    Array<IProject>
  >([]);
  const [newUsers, setNewUsers] = useState<Array<IUser>>([]);

  const getCurrentMembers = (positions: Array<Ipos>): number => {
    const currentMembers = positions.map((position: Ipos) => position.current);
    const sumCurrentMembers = currentMembers.reduce((a, b) => a + b);

    return sumCurrentMembers;
  };

  const getRequiredMembers = (positions: Array<Ipos>): number => {
    const requiredMembers = positions.map(
      (position: Ipos) => position.required
    );
    const sumRequiredMembers = requiredMembers.reduce((a, b) => a + b);

    return sumRequiredMembers;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { projects: recentProjects },
        } = await axios.get(`${PROJECT_SERVER}/resent`);
        const {
          data: { projects: recruitmentProjects },
        } = await axios.get(`${PROJECT_SERVER}/recruitment`);
        const {
          data: { users: newUsers },
        } = await axios.get(`${USER_SERVER}/new`);
        setRecentProjects(recentProjects);
        setRecruitmentProjects(recruitmentProjects);
        setNewUsers(newUsers);
      } catch (error) {
        alert(`정보를 받아오지 못했습니다. ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <Style>
      <Info />
      <ContentWrapper>
        <div className="new_project content">
          <Title subtitle="New Project" title="신규 프로젝트가 나왔어요" />
          <ProjectBoxList>
            {recentProjects
              ? recentProjects.map((project) => (
                  <ProjectBox
                    key={project._id}
                    id={project._id}
                    title={project.title}
                    description={project.summary}
                    image={project.thumb}
                    state={[
                      getCurrentMembers(project.position),
                      getRequiredMembers(project.position),
                    ]}
                    category={project.field}
                  />
                ))
              : '신규 프로젝트가 없습니다.'}
          </ProjectBoxList>
        </div>
        <div className="join_project content">
          <Title
            subtitle="Study With Us"
            title="모집중인 프로젝트를 둘러봐요"
          />
          <ProjectBoxList>
            {recruitmentProjects
              ? recruitmentProjects.map((project) => (
                  <ProjectBox
                    key={project._id}
                    id={project._id}
                    title={project.title}
                    description={project.summary}
                    image={project.thumb}
                    state={[
                      getCurrentMembers(project.position),
                      getRequiredMembers(project.position),
                    ]}
                    category={project.field}
                  />
                ))
              : '모집중인 프로젝트가 없습니다.'}
          </ProjectBoxList>
        </div>
        <div className="new_user content">
          <Title subtitle="New Co-Worker" title="가입을 축하드려요" />
          {newUsers ? (
            <PeopleList userList={newUsers} />
          ) : (
            '최근 가입한 유저가 없습니다.'
          )}
        </div>
        <div className="find_coworker content">
          <Title subtitle="Be my Co-Worker" title="동료를 찾아보세요" />
          <PeopleList userList={newUsers} />
        </div>
      </ContentWrapper>
    </Style>
  );
};

export default Home;
