"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Like = require('../models/Like').Like;
var Project = require('../models/Project').Project;
var UserRole = require('../models/UserRole').UserRole;
var router = express_1.default.Router();
router.post('/find', function (req, res) {
    UserRole.findOne({ projectId: req.body.pid, userId: req.body.uid }, function (err, role) {
        if (err)
            return res.json({ success: false, err: err });
        var msg = '';
        switch (role === null || role === void 0 ? void 0 : role.role) {
            case 0:
                msg = '이미 해당 프로젝트의 리더입니다';
                break;
            case 1:
                msg = '이미 해당 프로젝트의 멤버입니다';
                break;
            case 2:
                msg = '이미 해당 프로젝트에 지원했습니다';
                break;
        }
        return res.json({ success: true, msg: msg });
    });
});
router.post('/join', function (req, res) {
    var userRole = new UserRole({
        projectId: req.body.pid,
        userId: req.body.uid,
        role: 2,
        msg: req.body.msg,
    });
    userRole.save(function (err, doc) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
        });
    });
});
router.post('/accept', function (req, res) {
    Project.findOne({ _id: req.body.pid }, function (err, prj) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        var isFull = false;
        prj.position = prj.position.map(function (item) {
            if (item.pos === req.body.pos) {
                if (item.current < item.required)
                    item.current += 1;
                else
                    isFull = true;
            }
            return item;
        });
        if (isFull) {
            return res.json({ success: false, err: '모집 인원이 다 찼습니다' });
        }
        Project.findOneAndUpdate({ _id: req.body.pid }, { $set: { position: prj.position } }, function (err, prev) {
            if (err)
                return res.json({ success: false, err: err });
            UserRole.findOneAndUpdate({
                projectId: req.body.pid,
                userId: req.body.uid,
                role: 2,
            }, { $set: { role: 1 } }, function (err, userRole) {
                if (err) {
                    return res.json({ success: false, err: err });
                }
                return res.status(200).json({
                    success: true,
                });
            });
        });
    });
});
router.post('/reject', function (req, res) {
    UserRole.deleteOne({ projectId: req.body.pid, userId: req.body.uid, role: 2 }, function (err, userRole) {
        if (err)
            return res.json({ success: false, err: err });
        return res.status(200).json({
            success: true,
        });
    });
});
router.post('/remove', function (req, res) {
    Project.findOne({ _id: req.body.pid }, function (err, prj) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        var isEmpty = false;
        prj.position = prj.position.map(function (item) {
            if (item.pos === req.body.pos) {
                if (item.current > 0)
                    item.current -= 1;
                else
                    isEmpty = true;
            }
            return item;
        });
        if (isEmpty) {
            return res.json({ success: false, err: '더 이상 삭제할 수 없습니다' });
        }
        Project.findOneAndUpdate({ _id: req.body.pid }, { $set: { position: prj.position } }, function (err, prev) {
            if (err)
                return res.json({ success: false, err: err });
            UserRole.deleteOne({ projectId: req.body.pid, userId: req.body.uid, role: 1 }, function (err, userRole) {
                if (err)
                    return res.json({ success: false, err: err });
                return res.status(200).json({
                    success: true,
                });
            });
        });
    });
});
router.post('/updateProject', function (req, res) {
    Project.findOneAndUpdate({ _id: req.body._id }, Project(req.body), function (err, project) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            project: project,
        });
    });
});
router.post('/deleteProject', function (req, res) {
    UserRole.deleteMany({ projectId: req.body.pid }, function (err, userRole) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        Project.deleteOne({ _id: req.body.pid }, function (err, project) {
            if (err) {
                return res.json({ success: false, err: err });
            }
            Like.deleteMany({ ProjectId: req.body.pid }, function (err, like) {
                if (err) {
                    return res.json({ success: false, err: err });
                }
                return res.status(200).json({
                    success: true,
                });
            });
        });
    });
});
module.exports = router;
