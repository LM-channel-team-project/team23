import { Date, Document, Schema } from 'mongoose';

export default interface IUser extends Document {
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
  token: string;
  receivedLike: number;
  createdAt: Date;
  updatedAt: Date;
  join?: string;
  role?: string[];
  portfolio?: string[];
  intro?: string;
}
