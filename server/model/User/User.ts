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
      unique: true,
    },
    job: String,
    jobLevel: String,

    availableLocation: String,
    availableWeek: String,
    availableTime: String,
    learningPeriod: String,

    interestSkills: [String],

    intro: String,
    portfolio: [String],

    role: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    receivedLike: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like',
    },
    token: String,
  },
  {
    timestamps: true,
  }
);

const model: mongoose.Model<IUser> = mongoose.model('User', userSchema);

export default model;
