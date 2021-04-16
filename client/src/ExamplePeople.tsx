import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface APIProps {
  id: number;
  username: string;
  skill: string[];
  state: boolean;
}

export default function exPeople() {
  const [API, setAPI] = useState({ users: [] });

  useEffect(() => {
    axios.get('/api/users').then(({ data }) => {
      setAPI((API) => ({ users: data }));
      console.log(API);
    });
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {API.users.map((user: APIProps) => (
        <div key={user.id}>
          이름: {user.username}
          <div>{user.state ? '프로젝트 진행중' : '함께해요'}</div>
          <ul>
            {user.skill.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
