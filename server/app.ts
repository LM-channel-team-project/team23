import express from 'express';
import { SERVER_PORT } from './config/env';
import './db';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const fs = require('fs');

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello typescript!');
});

const UserRouter = require('./routes/User');
const ProjectRouter = require('./routes/Project');
app.use('/api/users', UserRouter);
app.use('/api/project', ProjectRouter);
app.use('/uploads', express.static('uploads'));

app.listen(SERVER_PORT, () => {
  console.log(`Server listnening on ${SERVER_PORT}`);
});
