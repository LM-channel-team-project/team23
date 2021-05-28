import mongoose, { Schema, Model } from 'mongoose';
import {IUserRole} from './UserRole.interface';

const userRoleSchema: mongoose.Schema<IUserRole> = new Schema(
  {
    prjectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    role: Number},
  {
    timestamps: true,
  }
);

export const UserRole: Model<IUserRole> = mongoose.model('user_role', userRoleSchema);

export default UserRole;