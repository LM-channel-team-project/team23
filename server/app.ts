import express from 'express';
import './db';
import User from './model/User';

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const fs = require('fs');

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello typescript!');
});

const UserRouter = require('./routes/User');
const ProjectRouter = require('./routes/Project');
app.use('/api/users', UserRouter);
app.use('/api/project', ProjectRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listnening on ${port}`);
});
