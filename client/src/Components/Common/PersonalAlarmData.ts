import { IUser } from '../../api/users';

export interface IAlarm {
  Contents: string;
  createdAt: Date;
  isRead: boolean;
  receivedId: string;
  senderId: IUser;
  type: number;
}

const AlarmText = [
  '1대 1 대화 요청이 왔습니다.',
  '프로젝트 초대가 왔습니다.',
  '이 프로젝트에 지원했습니다.',
];

export const AlarmTransfer = (type: number) => {
  return AlarmText[type];
};
