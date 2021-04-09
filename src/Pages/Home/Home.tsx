import React from 'react';
import Title from '../../Components/Home/Title';
import PersonBoxList from '../../Components/PersonBoxList';
import ProjectBoxList from '../../Components/PrjojectBoxList';

const Home = () => (
  <>
    <div className="info">
      <h2>Title</h2>
      <p>Brief description</p>
    </div>
    <div className="new_project">
      <Title subtitle="New Project" title="신규 프로젝트가 나왔어요" />
      <ProjectBoxList />
    </div>
    <div className="join_project">
      <Title subtitle="Study With Us" title="모집중인 프로젝트를 둘러봐요" />
      <ProjectBoxList />
      <ProjectBoxList />
    </div>
    <div className="new_user">
      <Title subtitle="New Co-Worker" title="가입을 축하드려요" />
      <PersonBoxList />
    </div>
    <div className="find_coworker">
      <Title subtitle="Be my Co-Worker" title="동료를 찾아보세요" />
      <PersonBoxList />
      <PersonBoxList />
    </div>
  </>
);

export default Home;
