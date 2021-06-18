import express, { Request, Response } from 'express';
const { Project } = require('../models/Project');
import { IProject } from '../models/Project.interface';
const { UserRole } = require('../models/UserRole');
import { IUserRole } from '../models/UserRole.interface';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello manage!');
});

router.post('/updateProject', (req: Request, res: Response) => {
  Project.findOneAndUpdate(
    { _id: req.body._id },
    Project(req.body),
    (err: Error, project: IProject) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        project: project,
      });
    }
  );
});

router.post('/deleteProject', (req: Request, res: Response) => {
  UserRole.deleteMany(
    { projectId: req.body.pid },
    (err: Error, userRole: IUserRole) => {
      if (err) {
        return res.json({ success: false, err });
      }
      Project.deleteOne(
        { _id: req.body.pid },
        (err: Error, project: IProject) => {
          if (err) {
            return res.json({ success: false, err });
          }
          return res.status(200).json({
            success: true,
          });
        }
      );
    }
  );
});

module.exports = router;
