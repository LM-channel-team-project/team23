//json-server 실행 필요(client 폴더 진입 후): npx json-server ./data.json --port 5000
import axios from 'axios';
//추후에 배포 시 localhost를 서버 주소로 변경
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export async function getUsers(): Promise<IUsers> {
  const response = await axios.get<IUsers>('/users');
  return response.data;
}

export interface IUsers {
  avartarImg: string;
  nickname: string;
  email: string;
  tel: string;
  position: string;
  positionLevel: string;
  availableLocation: string;
  availableWeek: string;
  availableTime: string;
  interestSkills: string[];
  intro: string;
  portfolio: string[];
  role: string[];
  join: [number];
  receivedLike: number;
  token: string;
  createdAt: Date;
  updatedAt: Date;
}
