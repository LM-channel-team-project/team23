import mongoose, { Schema, Model } from 'mongoose';
import { ILike } from './Like.interface';

const LikeSchema: mongoose.Schema<ILike> = new Schema(
  {
    RecieveduserId: {
      type: String,
      ref: 'User',
    },
    SenduserId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    ProjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  },
  {
    timestamps: true,
  }
);

export const Like: Model<ILike> = mongoose.model('like', LikeSchema);

export default Like;
