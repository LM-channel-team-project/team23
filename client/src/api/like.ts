import axios, { AxiosResponse } from 'axios';
import { LIKE_SERVER } from '../Config';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export const likeApi = {
  getLikeProjects: (): Promise<AxiosResponse> =>
    axios.get(`${LIKE_SERVER}/getLikeProjects`),
  getLikeUsers: (): Promise<AxiosResponse> =>
    axios.get(`${LIKE_SERVER}/getLikeUsers`),
  postMyLikeProjects: (id: { id: string | null }): Promise<AxiosResponse> =>
    axios.post(`${LIKE_SERVER}/myLikeProjects`, id),
};
