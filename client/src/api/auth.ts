import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'http://localhost:5000';

export async function getLogout(): Promise<IResponse> {
  const response = await axios.get<IResponse>('/logout');
  return response.data;
}
export async function getAuth(): Promise<IResponse> {
  const response = await axios.get<IResponse>('/auth');
  return response.data;
}
export async function postSignup(info: IMyInfo): Promise<IResponse> {
  const response = await axios.post<IResponse>('/signup', info);
  return response.data;
}
export async function postLogin(info: IMyInfo): Promise<IResponse> {
  const response = await axios.post<IResponse>('/login', info);
  return response.data;
}

export interface IResponse {
  success: boolean;
  error: string;
}

export interface IMyInfo {
  email: string;
}
