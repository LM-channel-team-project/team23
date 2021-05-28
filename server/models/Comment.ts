import mongoose, { Schema, Model } from 'mongoose';
import {IComment} from './Commet.interface';

const CommentSchema: mongoose.Schema<IComment> = new Schema(
  {
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ProjectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
},
  {
    timestamps: true,
  }
);

export const Comment: Model<IComment> = mongoose.model('comment', CommentSchema);

export default Comment;