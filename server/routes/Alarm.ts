import express, { Request, Response } from 'express';
import { Alarm } from '../models/Alarm';
import { IAlarm } from '../models/Alarm.interface';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {});

router.post('/apply', (req: Request, res: Response) => {
  const alarm = new Alarm({
    senderId: req.body.sid,
    receivedId: req.body.rid,
    isRead: false,
    Contents: `프로젝트에 지원 요청이 왔습니다`,
    type: 2,
  });
  alarm.save((err: Error | null, doc: IAlarm) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post('/comment', (req: Request, res: Response) => {
  const alarm = new Alarm({
    senderId: req.body.sid,
    receivedId: req.body.rid,
    isRead: false,
    Contents: `프로젝트에 질문이 왔습니다`,
    type: 3,
  });
  alarm.save((err: Error | null, doc: IAlarm) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
