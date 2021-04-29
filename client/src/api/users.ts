//json-server 실행 필요: npx json-server ./data.json --port 5000
import axios from 'axios';
//추후에 배포 시 localhost를 서버 주소로 변경
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export async function getUsers(): Promise<IUsers> {
  const response = await axios.get<IUsers>('/users');
  return response.data;
}

export interface IUsers {
  avartar: string;
  nickName: string;
  email: string;
  job: string;
  learning: string;
  area: string;
  skill: string[];
  joinDate: string;
  intro: string;
  portfolio: string[];
  role: string[];
  token: string;
}
