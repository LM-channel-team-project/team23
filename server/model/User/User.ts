import mongoose from 'mongoose';
import IUser from './UserInterface';

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    avartarImg: String,
    nickname: {
      type: String,
      required: 'Nickname is required.',
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: 'Email is required.',
      trim: true,
      unique: true,
    },
    tel: {
      type: String,
      trim: true,
    },
    position: String,
    positionLevel: String,
    availableLocation: String,
    availableWeek: String,
    availableTime: String,
    interestSkills: [String],
    token: String,
    receivedLike: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like',
    },
    join: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    portfolio: [String],
    intro: String,
  },
  {
    timestamps: true,
  }
);

const model: mongoose.Model<IUser> = mongoose.model('User', userSchema);

export default model;
