import { Document, Schema } from 'mongoose';

export interface IUserRole extends Document {
  prjectId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId
  role: Number;
}