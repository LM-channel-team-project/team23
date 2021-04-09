import React from 'react';

interface ProjectProps {
  id: number;
  title: string;
  skill: string[];
}
const ProjectBox = () => (
  <div>
    <div className="use_skill">skill_list</div>
    <div className="Title">제목</div>
    <button className="moreInfo">자세히 보기</button>
  </div>
);
export default ProjectBox;
