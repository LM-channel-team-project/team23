"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var multer = require('multer');
var Project = require('../models/Project').Project;
var User = require('../models/User').User;
var UserRole = require('../models/UserRole').UserRole;
var fs = require('fs');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/projects');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
var upload = multer({ storage: storage }).single('projectImg');
//api/projects?area=A0&field=F0&pos=android&level=level1&page=1
//지역 필터/ 분야 필터/ 직무 필터/ 레벨 필터
router.get('/', function (req, res) {
    var page = typeof req.query.page === 'string' ? req.query.page : '1';
    var areaFilter = req.query.area;
    var fieldFilter = req.query.field;
    var posFilter = req.query.pos;
    var levelFilter = req.query.level;
    var skip = (parseInt(page) - 1) * 10;
    var limit = 10;
    var filterarg = {};
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
        .exec(function (err, project) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            page: page,
            filterarg: filterarg,
            project: project,
        });
    });
});
router.post('/info', function (req, res) {
    Project.findOne({ _id: req.body._id }, function (err, project) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            project: project,
        });
    });
});
router.get('/info/:nickname', function (req, res) {
    Project.findOne({ nickname: req.params.nickname }, function (err, project) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            project: project,
        });
    });
});
router.get('/joined/:uid', function (req, res) {
    UserRole.find({ userId: req.params.uid, role: 2 }, function (err, roles) {
        if (err)
            return res.json({
                success: false,
                err: err,
            });
        Promise.all(roles.map(function (role) { return Project.findOne({ _id: role.projectId }); }))
            .then(function (result) {
            return res.status(200).json({
                success: true,
                result: result,
            });
        })
            .catch(function (err) {
            return res.json({
                success: false,
                err: err,
            });
        });
    });
});
router.get('/progress/:uid', function (req, res) {
    UserRole.find({ userId: req.params.uid, role: { $in: [0, 1] } }, function (err, roles) {
        if (err)
            return res.json({
                success: false,
                err: err,
            });
        Promise.all(roles.map(function (role) { return Project.findOne({ _id: role.projectId }); }))
            .then(function (result) {
            return res.status(200).json({
                success: true,
                result: result,
            });
        })
            .catch(function (err) {
            return res.json({
                success: false,
                err: err,
            });
        });
    });
});
router.get('/joinList/:id', function (req, res) {
    UserRole.find({ projectId: req.params.id, role: 2 }, function (err, role) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        // role 배열에 담긴 유저아이디 참조해서 유저 정보 배열 구한 뒤 결과로 보내기
        Promise.all(role.map(function (r) { return User.findOne({ _id: r.userId }); }))
            .then(function (result) {
            var mappedResult = result.map(function (item, idx) { return ({
                item: item,
                msg: role[idx].msg,
            }); });
            return res.status(200).json({
                success: true,
                result: mappedResult,
            });
        })
            .catch(function (err) {
            return res.status(200).json({
                success: false,
                err: err,
            });
        });
    });
});
router.get('/memberList/:id', function (req, res) {
    UserRole.find({ projectId: req.params.id, role: 1 }, function (err, role) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        // role 배열에 담긴 유저아이디 참조해서 유저 정보 배열 구한 뒤 결과로 보내기
        Promise.all(role.map(function (r) { return User.findOne({ _id: r.userId }); }))
            .then(function (result) {
            var mappedResult = result.map(function (item, idx) { return ({
                item: item,
            }); });
            return res.status(200).json({
                success: true,
                result: mappedResult,
            });
        })
            .catch(function (err) {
            return res.status(200).json({
                success: false,
                err: err,
            });
        });
    });
});
router.get('/recommendList', function (req, res) {
    Project.find()
        .sort({ receivedLike: -1 })
        .exec(function (err, project) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            project: project,
        });
    });
});
router.post('/updateImg', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            filePath: req.file.path,
        });
    });
});
router.post('/updateText', function (req, res) {
    var text = req.body.text;
    var filePath = "uploads/projects/descriptions/" + Date.now() + "_desc.txt";
    fs.writeFile(filePath, text, function (err) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            filePath: filePath,
        });
    });
});
router.post('/buildProject', function (req, res) {
    var project = new Project(req.body);
    project.save(function (err, project) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        var userRole = new UserRole({
            projectId: project._id,
            userId: project.writer,
            role: 0,
        });
        userRole.save(function (err, doc) {
            if (err) {
                return res.json({ success: false, err: err });
            }
            return res.status(200).json({
                success: true,
                project: project,
            });
        });
    });
});
router.get('/resent', function (req, res) {
    Project.find()
        .sort({ createdAt: -1 })
        .limit(6)
        .exec(function (err, projects) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).json({
            projects: projects,
        });
    });
});
router.get('/recruitment', function (req, res) {
    Project.find({ $expr: { $lt: ['$position.current', '$position.required'] } })
        .limit(6)
        .exec(function (err, projects) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).json({
            projects: projects,
        });
    });
});
module.exports = router;
