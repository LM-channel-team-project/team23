"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User_1 = require("../models/User");
var Alarm_1 = require("../models/Alarm");
var router = express_1.default.Router();
router.post('/NewAlarmList', function (req, res) {
    Alarm_1.Alarm.find()
        .where('receivedId')
        .equals(req.body.userId)
        .where('isRead')
        .equals(false)
        .populate('senderId')
        .exec(function (err, result) {
        if (err) {
            res.send({
                success: false,
                err: err,
            });
        }
        res.status(200).send({
            success: true,
            result: result,
        });
    });
});
router.post('/MyAlarmList', function (req, res) {
    Alarm_1.Alarm.find()
        .where('receivedId')
        .equals(req.body.userId)
        .populate('senderId')
        .exec(function (err, result) {
        if (err) {
            res.send({
                success: false,
                err: err,
            });
        }
        res.status(200).send({
            success: true,
            result: result,
        });
    });
});
router.post('/read', function (req, res) {
    Alarm_1.Alarm.findOneAndUpdate({ _id: req.body.alarmId }, { $set: { isRead: true } }).exec(function (err, doc) {
        if (err) {
            res.send({
                success: false,
                err: err,
            });
        }
        res.status(200).send({
            success: true,
            msg: '메세지를 읽음 처리 했습니다.',
        });
    });
});
router.post('/createAlarm', function (req, res) {
    User_1.User.findOne({ nickname: req.body.receivedUserNickname }, function (err, user) {
        var AlarmInfo = {
            senderId: req.body.senderId,
            receivedId: user._id,
            isRead: false,
            Contents: req.body.contents,
            type: req.body.type,
        };
        var newAlarm = new Alarm_1.Alarm(AlarmInfo);
        newAlarm.save(function (err, doc) {
            if (err) {
                res.send({
                    success: false,
                    err: err,
                });
            }
            else {
                res.send({
                    success: true,
                    msg: '알람이 성공적으로 전송되었습니다.',
                });
            }
        });
    });
});
router.post('/apply', function (req, res) {
    var alarm = new Alarm_1.Alarm({
        senderId: req.body.sid,
        receivedId: req.body.rid,
        isRead: false,
        Contents: req.body.contents,
        type: 2,
    });
    alarm.save(function (err, doc) {
        if (err)
            return res.json({ success: false, err: err });
        return res.status(200).json({ success: true });
    });
});
router.post('/comment', function (req, res) {
    var alarm = new Alarm_1.Alarm({
        senderId: req.body.sid,
        receivedId: req.body.rid,
        isRead: false,
        Contents: req.body.contents,
        type: 3,
    });
    alarm.save(function (err, doc) {
        if (err)
            return res.json({ success: false, err: err });
        return res.status(200).json({ success: true });
    });
});
module.exports = router;
