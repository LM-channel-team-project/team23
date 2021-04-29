import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  avartarImg: String,
  nickname: {
    type: String,
    required: 'Nickname is required.',
  },
  email: {
    type: String,
    required: 'Email is required.',
  },
  tel: String,
  job: String,
  jobLevel: String,

  availableLocation: String,
  availableWeek: String,
  availableTime: String,
  learningPeriod: String,

  interestSkills: [String],
  joinDate: {
    type: Date,
    default: Date.now,
  },
  intro: String,
  portfolio: [String],

  // role: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Project',
  //   },
  // ],
  // receivedLike: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Like',
  // },
  token: String,
});

const model = mongoose.model('User', userSchema);

export default model;
