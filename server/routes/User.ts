import express, { request, Request, response, Response } from "express";
const router = express.Router();
const { User } = require('../models/User');
import { IUserMethods } from '../models/User.interface';
import { auth } from "../middleware/auth.middleware";

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req: Request, file:any, cb: Function) => {
      cb(null, 'uploads/users')
  },
  filename: (req: Request, file:any, cb: Function) =>{
      cb(null, `${Date.now()}_${file.originalname}`)
  },
});

const upload = multer({ storage: storage }).single('profileImg');

router.post("/nickname", (req: Request, res: Response) => {
  User.findOne({nickname : req.body.nickname}, (err: Error, user:IUserMethods) => {
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
  user.save((err: Error|null, doc: IUserMethods) => {
    if(err) {
      return res.json({ success: false, err});
    }
    return res.status(200).json({
      success: true,
      user: doc
    })
  })
});

router.post("/login",(req: Request, res: Response) => {
  //구글, github 로그인 => profileObj의 email로 회원정보 확인
  User.findOne({email: req.body.email}, (err: Error, user: IUserMethods) => {
    if(!user){
      return res.json({
        Success: false,
        error: "email not found"
      });
    }
    if(err) {
      return res.json({success: false, err});
    }
    user.generateToken((err: Error, user: IUserMethods) => {
      if(err) return res.status(400).send(err);
      res.cookie("U_auth", user.token)
        .status(200).json({
          success: true,
          userId: user._id,
        })
    })
  })
})

router.post("/info", (req: Request, res: Response) => {
  User.findOne({_id: req.body._id}, (err: Error, user: IUserMethods) => {
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
  User.findOneAndUpdate({_id: req.body._id}, User(req.body), (err: Error, user:IUserMethods) => {
    if(err){
      return res.json({ success: false, err});
    };
    return res.status(200).json({
      success: true,
      user: user,
    });
  });
});

router.post("/updateImg",(req: Request, res: Response) => {
  upload(req, res, (err: Error) => {
    if(err){
      return res.json({ success: false, err });
    };
    return res.status(200).json({
      success: true,
      filePath: req.file.path,
    })
  })
});

router.get("/auth", auth, (req: Request, res: Response) => {
  if(req.user){
    res.status(200).json({
      _id: req.user._id,
      isAuth: true,
      email: req.user.email,
      name: req.user.nickname,
      avartarImg : req.user.avartarImg ? req.user.avartarImg : 'none',
    })
  }
});

router.get("/logout", auth, (req: Request, res: Response) => {
  if(req.user){
    User.findOneAndUpdate({_id: req.user._id}, {token: ""}, { rawResult: true},(err: Error, doc: any) => {
      if(err) return res.json({
        success: false,
        err
      });
      return res.status(200).send({
        success: true
      });
    });
  }
});

module.exports =router;