import { Date, Document, Schema } from 'mongoose';

export interface ILike extends Document {
  RecieveduserId?: Schema.Types.ObjectId;
  SenduserId: Schema.Types.ObjectId;
  ProjectId?: Schema.Types.ObjectId;
}
