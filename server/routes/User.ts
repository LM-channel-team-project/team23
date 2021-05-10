import express, { Request, Response } from "express";
const router = express.Router();
const { User } = require('../models/User');
import IUser from '../models/User.interface';

router.post("/nickname", (req: Request, res: Response) => {
  User.findOne({nickname : req.body.nickname}, (err: Error, user:IUser) => {
    if(err){
      return res.json({ success: false, err});
    }
    if(user != null ){
      res.json({
        success: false
      })
    } else {
      res.status(200).json({
        success: true,
        nickname: req.body.nickname
      });
    }
  })
});

router.post("/signup", (req: Request, res: Response) => {
  const user = new User(req.body);
  user.save((err: Error|null, doc: IUser) => {
    if(err) {
      return res.json({ success: false, err});
    }
    return res.status(200).json({
      success: true,
      user: doc
    })
  })
});

router.post("/info", (req: Request, res: Response) => {
  User.findOne({_id: req.body._id}, (err: Error, user: IUser) => {
    if(err){
      return res.json({success: false, err});
    }
    return res.status(200).json({
      success: true,
      user: user,
    })
  })
});

router.post("/update",(req: Request, res: Response) => {
  User.findOneAndUpdate({_id: req.body._id}, User(req.body), (err: Error, user:IUser) => {
    if(err){
      return res.json({ success: false, err});
    };
    return res.status(200).json({
      success: true,
      user: user
    });
  })
})

module.exports =router;