import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/study-with', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const studyWithDB = mongoose.connection;

const handleOpen = () => {
  console.log('Connected to Study-with DB!!');
};
const handleError = (error: any) =>
  console.log(`Error on DB connection: ${error}`);

studyWithDB.once('open', handleOpen);
studyWithDB.on('error', handleError);

// const connect = mongoose
//   .connect('mongodb://127.0.0.1:27017/study-with', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log('MongoDB Connected..'))
//   .catch((err: any) => console.log(err));
