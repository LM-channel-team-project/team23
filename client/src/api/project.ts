import axios from 'axios';
import { PROJECT_SERVER } from '../Config';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export async function getProjectById(id: string): Promise<IProjectInfo> {
  const response = await axios.get<IProjectInfo>(`${PROJECT_SERVER}/${id}`);
  return response.data;
}

export interface IProjectInfo {
  success: boolean;
  project: Array<IProject>;
}

export interface IProject {
  position: Array<IPos>;
  referenceURL: Array<string>;
  _id: string;
  title: string;
  thumb: string;
  info: string;
  summary: string;
  field: string;
  area: string;
  startAt: Date;
  endAt: Date;
  projectLV: string;
  receivedLike: number;
  writer: string;
  createAt: Date;
  updatedAt: Date;
}

export interface IPos {
  pos: string;
  required: number;
  current: number;
}
