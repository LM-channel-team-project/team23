import axios, { AxiosResponse } from 'axios';
import { USER_SERVER } from '../config';
import { PROJECT_SERVER } from '../config';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export const homeApi = {
  getResentProjects: (): Promise<AxiosResponse> =>
    axios.get(`${PROJECT_SERVER}/resent`),
  getRecruitmentProjects: (): Promise<AxiosResponse> =>
    axios.get(`${PROJECT_SERVER}/resent`),
  getNewUsers: (): Promise<AxiosResponse> => axios.get(`${USER_SERVER}/new`),
  getWaitUsers: (): Promise<AxiosResponse> =>
    axios.get(`${USER_SERVER}/waitList`),
};
