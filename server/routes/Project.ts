import express, { Request, Response } from 'express';

const router = express.Router();
const multer = require('multer');
const { Project } = require('../models/Project');
import { IProject } from '../models/Project.interface';
const { UserRole } = require('../models/UserRole');
import { IUserRole } from '../models/UserRole.interface';
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: Function) => {
    cb(null, 'uploads/projects');
  },
  filename: (req: Request, file: any, cb: Function) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('projectImg');

router.post('/updateImg', (req: Request, res: Response) => {
  upload(req, res, (err: Error) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      filePath: req.file.path,
    });
  });
});

router.post('/updateText', (req: Request, res: Response) => {
  const { text } = req.body;
  const filePath = `uploads/projects/descriptions/${Date.now()}_desc.txt`;
  fs.writeFile(filePath, text, (err: Error) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      filePath,
    });
  });
});

router.post('/buildProject', (req: Request, res: Response) => {
  const project = new Project(req.body);
  project.save((err: Error | null, project: IProject) => {
    if (err) {
      return res.json({ success: false, err });
    }
    const userRole = new UserRole({
      prjectId: project._id,
      userId: project.writer,
      role: 1,
    });
    userRole.save((err: Error | null, doc: IUserRole) => {
      if (err) {
        return res.json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        project,
      });
    });
  });
});

module.exports = router;
