import express, { Request, Response } from 'express';
import Like from '../models/Like';
import { ILike } from '../models/Like.interface';

const router = express.Router();

router.post('/getLike', (req: Request, res: Response) => {
  let data = {};

  if (req.body.projectId) {
    data = { ProjectId: req.body.projectId };
  } else {
    data = { RecieveduserId: req.body.RecieveduserId };
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
      RecieveduserId: req.body.RecieveduserId,
      SenduserId: req.body.userId,
    };
  }

  const like = new Like(data);

  like.save((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    return res.status(200).json({
      success: true,
    });
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
      RecieveduserId: req.body.RecieveduserId,
      SenduserId: req.body.userId,
    };
  }

  Like.findOneAndDelete(data).exec((error, result) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
