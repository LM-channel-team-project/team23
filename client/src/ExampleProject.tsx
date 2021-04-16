import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface APIProps {
  id: number;
  title: string;
  description: string;
  skill: string[];
  state: Array<number>;
  category: string;
}

export default function exProject() {
  const [API, setAPI] = useState({ projects: [] });

  useEffect(() => {
    axios.get('/api/project').then(({ data }) => {
      setAPI((API) => ({ projects: data }));
      console.log(API);
    });
  }, []);

  return (
    <div className="App">
      <h1>Project</h1>
      {API.projects.map((project: APIProps) => (
        <div key={project.id}>
          [{project.category}]{project.title}
          <p>{project.description}</p>
          <div>
            {project.state[0] >= project.state[1] ? '모집완료' : '모집중'}
          </div>
          <div>
            모집인원 : {project.state[0]}/{project.state[1]}
          </div>
          <ul>
            {project.skill.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
