import express from 'express';

const app = express();
app.use(express.json());
const cors=require('cors');
app.use(cors());

const fs=require('fs');

const config = require("./config/key");
const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
    {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
    }).then(()=>console.log('MongoDB Connected..'))
      .catch((err:any) => console.log(err));

app.get('/',(req:express.Request, res: express.Response)=>{
    res.send('hello typescript!');
});

const UserRouter = require('./routes/User');
app.use('/users',UserRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listnening on ${port}`);
});