import React, { useState, useEffect } from 'react';
import Title from '../../Components/Common/Title';
import ProjectBoxList from '../../Components/Project/ProjectBoxList';
import ProjectBox from '../../Components/Project/ProjectBox';
import Info from '../../Components/Home/Info';
import styled from 'styled-components';
import PeopleList from '../../Components/People/PeopleList';
import axios from 'axios';
import { PROJECT_SERVER } from '../../Config';
import { IProject } from '../../../../server/models/Project.interface';

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

interface IUser {
  createdAt: Date;
  avartarImg: string;
  nickname: string;
  position: string;
  positionLevel: string;
  interestSkills: string[];
  receivedLike: number;
}

//users1은 신규 가입 3명 불러오기 => /api/users/new
//users2는 프로젝트 미참여 중에 3명 불러오기 => api/users/waitList
const Home = () => {
  const [users, setUsers] = useState<[IUser]>([
    {
      avartarImg: 'http://kawala.in/assets/global/images/avatars/avatar1.png',
      nickname: 'allmie',
      position: 'frontend',
      positionLevel: 'level2',
      interestSkills: ['#WEB', '#Javascript'],
      receivedLike: 9,
      createdAt: new Date(),
    },
  ]);
  const [recentProjects, setRecentProjects] = useState<Array<IProject>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { projects },
        } = await axios.get(`${PROJECT_SERVER}/resentProjects`);
        setRecentProjects(projects);
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
                    state={[1, 4]}
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
            <ProjectBox
              id={4125}
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
          <PeopleList userList={users} />
        </div>
        <div className="find_coworker content">
          <Title subtitle="Be my Co-Worker" title="동료를 찾아보세요" />
          <PeopleList userList={users} />
        </div>
      </ContentWrapper>
    </Style>
  );
};

export default Home;
