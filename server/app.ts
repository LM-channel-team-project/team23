import express from 'express';
import { SERVER_PORT } from './config/env';
import './db';
import cookieParser from 'cookie-parser';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello typescript!');
});

const UserRouter = require('./routes/User');
const ProjectRouter = require('./routes/Project');
const ManageProjectRouter = require('./routes/ManageProject');
const LikeRouter = require('./routes/Like');
const CommentRouter = require('./routes/Comment');
app.use('/api/users', UserRouter);
app.use('/api/projects', ProjectRouter);
app.use('/api/manage', ManageProjectRouter);
app.use('/api/like', LikeRouter);
app.use('/api/comment', CommentRouter);
app.use('/uploads', express.static('uploads'));

const { User } = require('./models/User');
import { IUserMethods } from './models/User.interface';
const { Alarm } = require('./models/Alarm');
import { IAlarm } from './models/Alarm.interface';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage';
const REQUEST_ALARM = 'requestAlarm';
const SHOW_ALARM = 'showAlarm';
//Chatt
io.on('connection', (socket: any) => {
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data: any) => {
    console.log(data);
    io.emit(NEW_CHAT_MESSAGE_EVENT, data);
  });
  socket.on(REQUEST_ALARM, async (data: any) => {
    User.findOne({ nickname: data.receivedNickname }, (err: Error, user: IUserMethods) => {
      Alarm.findOne({ senderId: data.senderId, receivedId: user._id, type: 0}, (err: Error, doc: IAlarm) => {
        if (!doc) {
          const AlarmInfo = {
            senderId: data.senderId,
            receivedId: user._id,
            isRead: false,
            Contents: data.msg,
            type: data.type,
          };
          const newAlarm = new Alarm(AlarmInfo);
          newAlarm.save((err: Error | null, doc: IAlarm) => {
            io.emit(REQUEST_ALARM, { makeAlarm: true });
          });
        } else {
          io.emit(REQUEST_ALARM, { makeAlarm: false });
        };
      })
    });
  });
  socket.on(SHOW_ALARM, async (data: any) => {
    Alarm.find()
      .where('receivedId')
      .equals(data.userID)
      .populate('senderId')
      .exec((err: Error, result: any) => {
        io.emit(SHOW_ALARM, result);
      })
  })
  socket.on('disconnect', () => {
    socket.leave();
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Server listnening on ${SERVER_PORT}`);
});
