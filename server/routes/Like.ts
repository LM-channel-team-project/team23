import express, { Request, Response } from 'express';
import Like from '../models/Like';
import { Project } from '../models/Project';
import { IProject } from '../models/Project.interface';
import { User } from '../models/User';
import { IUser } from '../models/User.interface';
import { ILike } from '../models/Like.interface';

const router = express.Router();

router.post('/getLike', (req: Request, res: Response) => {
  let data = {};

  if (req.body.projectId) {
    data = { ProjectId: req.body.projectId };
  } else {
    data = { RecieveduserId: req.body.recieveduserId };
  }

  Like.find(data).exec((error, likes) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.status(200).json({
      success: true,
      likes,
    });
  });
});

router.post('/upLike', (req: Request, res: Response) => {
  let data = {};

  if (req.body.projectId) {
    data = {
      ProjectId: req.body.projectId,
      SenduserId: req.body.userId,
    };
  } else {
    data = {
      RecieveduserId: req.body.recieveduserId,
      SenduserId: req.body.userId,
    };
  }

  const like = new Like(data);

  like.save((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }

    if (req.body.projectId) {
      Project.findOneAndUpdate(
        { _id: req.body.projectId },
        { $inc: { receivedLike: 1 } }
      ).exec((error, result) => {
        if (error) {
          return res.status(400).send(error);
        }
        return res.status(200).json({
          success: true,
        });
      });
    } else {
      User.findOneAndUpdate(
        { nickname: req.body.recieveduserId },
        { $inc: { receivedLike: 1 } }
      ).exec((error, result) => {
        if (error) {
          return res.status(400).send(error);
        }
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
});

router.post('/unLike', (req: Request, res: Response) => {
  let data = {};

  if (req.body.projectId) {
    data = {
      ProjectId: req.body.projectId,
      SenduserId: req.body.userId,
    };
  } else {
    data = {
      RecieveduserId: req.body.recieveduserId,
      SenduserId: req.body.userId,
    };
  }

  Like.findOneAndDelete(data).exec((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    if (req.body.projectId) {
      Project.findOneAndUpdate(
        { _id: req.body.projectId },
        { $inc: { receivedLike: -1 } }
      ).exec((error, result) => {
        if (error) {
          return res.status(400).send(error);
        }
        return res.status(200).json({
          success: true,
        });
      });
    } else {
      User.findOneAndUpdate(
        { nickname: req.body.recieveduserId },
        { $inc: { receivedLike: -1 } }
      ).exec((error, result) => {
        if (error) {
          return res.status(400).send(error);
        }
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
});

module.exports = router;
