import React from 'react';
import PersonBox from '../../Components/person_box';
import ProjectBox from '../../Components/project_box';

const Home = () => (
  <>
    <div className="info">
      <h2>Title</h2>
      <p>Brief description</p>
    </div>
    <div className="new_project">
      <div className="title">
        <h3>New Project</h3>
        <h2>신규 프로젝트를 확인해보세요</h2>
      </div>
      <li>
        <ProjectBox />
      </li>
    </div>
    <div className="join_project">
      <div className="title">
        <h3>Study With Us</h3>
        <h2>현재 모집중인 프로젝트</h2>
      </div>
      <li>
        <ProjectBox />
      </li>
    </div>
    <div className="new_user">
      <div className="title">
        <h3>New Co-worker</h3>
        <h2>가입을 축하드려요</h2>
      </div>
      <li>
        <PersonBox />
      </li>
    </div>
    <div className="find_coworker">
      <div className="title">
        <h3>Be My Co-Worker</h3>
        <h2>프로젝트를 기다리고 있어요</h2>
      </div>
      <li>
        <PersonBox />
      </li>
    </div>
  </>
);

export default Home;
