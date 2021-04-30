import { Date, Document } from 'mongoose';

export default interface IUser extends Document {
  avartarImg: string;
  nickname: string;
  email: string;
  tel: string;
  job: string;
  jobLevel: string;
  availableLocation: string;
  availableWeek: string;
  availableTime: string;
  learningPeriod: string;
  interestSkills: string[];
  portfolio: string[];
  receivedLike: number;
  token: string;
  timestamps: Date;
  intro?: string;
  role?: string;
}
