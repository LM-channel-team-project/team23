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

//api/projects?area=A0&field=F0&pos=android&level=level1&page=1
//지역 필터/ 분야 필터/ 직무 필터/ 레벨 필터
router.get('/', (req: Request, res: Response) => {
  const page = typeof req.query.page === 'string' ? req.query.page : '1';
  const areaFilter = req.query.area;
  const fieldFilter = req.query.field;
  const posFilter = req.query.pos;
  const levelFilter = req.query.level;
  const skip = (parseInt(page) - 1) * 10;
  const limit = 10;
  let filterarg: any = {};
  if (areaFilter) {
    filterarg['area'] = areaFilter;
  }
  if (fieldFilter) {
    filterarg['field'] = fieldFilter;
  }
  if (posFilter) {
    filterarg['position'] = { $elemMatch: { pos: posFilter } };
  }
  if (levelFilter) {
    filterarg['projectLV'] = levelFilter;
  }
  Project.find(filterarg)
    .skip(skip)
    .limit(limit)
    .exec((err: Error, project: IProject) => {
      if (err) {
        return res.json({
          success: false,
          err,
        });
      }
      res.status(200).json({
        success: true,
        page,
        filterarg,
        project,
      });
    });
});

router.post('/info', (req: Request, res: Response) => {
  Project.findOne({ _id: req.body._id }, (err: Error, project: IProject) => {
    if (err) {
      return res.json({
        success: false,
        err,
      });
    }
    res.status(200).json({
      success: true,
      project,
    });
  });
});

router.get('/recommendList', (req: Request, res: Response) => {
  Project.find()
    .sort({ receivedLike: -1 })
    .exec((err: Error, project: IProject) => {
      if (err) {
        return res.json({
          success: false,
          err,
        });
      }
      res.status(200).json({
        success: true,
        project,
      });
    });
});

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
      projectId: project._id,
      userId: project.writer,
      role: 0,
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

router.get('/resent', (req: Request, res: Response) => {
  Project.find()
    .sort({ createdAt: -1 })
    .limit(6)
    .exec((err: Error, projects: IProject) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).json({
        projects,
      });
    });
});

router.get('/recruitment', (req: Request, res: Response) => {
  Project.find({ $expr: { $lt: ['$position.current', '$position.required'] } })
    .limit(6)
    .exec((err: Error, projects: IProject) => {
      if (err) {
        return res.status(400).send(err);
      }
      return res.status(200).json({
        projects,
      });
    });
});

module.exports = router;
