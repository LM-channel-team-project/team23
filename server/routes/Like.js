"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Like_1 = __importDefault(require("../models/Like"));
var Project_1 = require("../models/Project");
var User_1 = require("../models/User");
var router = express_1.default.Router();
// 프로젝트를 좋아요한 유저
router.post('/projectLikeUsers', function (req, res) {
    Like_1.default.find({ ProjectId: req.body.id })
        .populate('SenduserId')
        .exec(function (error, users) {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).json({
            success: true,
            users: users,
        });
    });
});
// 로그인 유저가 좋아요한 유저
router.post('/myLikeUsers', function (req, res) {
    Like_1.default.find({
        $and: [{ SenduserId: req.body.id }, { RecieveduserId: { $exists: true } }],
    })
        .populate('RecieveduserId')
        .exec(function (error, users) {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).json({
            success: true,
            users: users,
        });
    });
});
// 로그인 유저가 좋아요한 프로젝트
router.post('/myLikeProjects', function (req, res) {
    // const data = {
    //   $exists: true,
    // }
    Like_1.default.find({
        $and: [{ SenduserId: req.body.id }, { ProjectId: { $exists: true } }],
    })
        .populate('ProjectId')
        .exec(function (error, projects) {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).json({
            success: true,
            projects: projects,
        });
    });
});
// 좋아요가 있는 프로젝트
router.get('/getLikeProjects', function (req, res) {
    Like_1.default.find({ ProjectId: { $exists: true } }).exec(function (error, likes) {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).json({
            success: true,
            likes: likes,
        });
    });
});
// 좋아요가 있는 유저
router.get('/getLikeUsers', function (req, res) {
    Like_1.default.find({ RecieveduserId: { $exists: true } }).exec(function (error, likes) {
        if (error) {
            return res.status(400).send(error);
        }
        res.status(200).json({
            success: true,
            likes: likes,
        });
    });
});
// 좋아요 +1
router.post('/upLike', function (req, res) {
    var data = {};
    if (req.body.projectId) {
        data = {
            ProjectId: req.body.projectId,
            SenduserId: req.body.userId,
        };
    }
    else {
        data = {
            RecieveduserId: req.body.recieveduserId,
            SenduserId: req.body.userId,
        };
    }
    var like = new Like_1.default(data);
    like.save(function (error, result) {
        if (error) {
            return res.status(400).send(error);
        }
        if (req.body.projectId) {
            Project_1.Project.findOneAndUpdate({ _id: req.body.projectId }, { $inc: { receivedLike: 1 } }).exec(function (error, result) {
                if (error) {
                    return res.status(400).send(error);
                }
                return res.status(200).json({
                    success: true,
                });
            });
        }
        else {
            User_1.User.findOneAndUpdate({ _id: req.body.recieveduserId }, { $inc: { receivedLike: 1 } }).exec(function (error, result) {
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
// 좋아요 -1
router.post('/unLike', function (req, res) {
    var data = {};
    if (req.body.projectId) {
        data = {
            ProjectId: req.body.projectId,
            SenduserId: req.body.userId,
        };
    }
    else {
        data = {
            RecieveduserId: req.body.recieveduserId,
            SenduserId: req.body.userId,
        };
    }
    Like_1.default.findOneAndDelete(data).exec(function (error, result) {
        if (error) {
            return res.status(400).send(error);
        }
        if (req.body.projectId) {
            Project_1.Project.findOneAndUpdate({ _id: req.body.projectId }, { $inc: { receivedLike: -1 } }).exec(function (error, result) {
                if (error) {
                    return res.status(400).send(error);
                }
                return res.status(200).json({
                    success: true,
                });
            });
        }
        else {
            User_1.User.findOneAndUpdate({ _id: req.body.recieveduserId }, { $inc: { receivedLike: -1 } }).exec(function (error, result) {
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
