import { Document, Schema } from 'mongoose';

export interface IComment extends Document {
  writer: Schema.Types.ObjectId;
  ProjectId: Schema.Types.ObjectId;
}