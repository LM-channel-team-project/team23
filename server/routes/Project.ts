import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

const multer = require('multer');

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

module.exports = router;
