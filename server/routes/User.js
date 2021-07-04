"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var User = require('../models/User').User;
var auth_middleware_1 = require("../middleware/auth.middleware");
var UserRole_1 = __importDefault(require("../models/UserRole"));
var node_filter_async_1 = __importDefault(require("node-filter-async"));
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/users');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
var upload = multer({ storage: storage }).single('profileImg');
function isJoin(_id) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, UserRole_1.default.find().where('userId').equals(_id)];
                case 1:
                    result = _a.sent();
                    if (result.length > 0) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function filterById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, isJoin(id)];
                case 1:
                    if (_a.sent()) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
            }
        });
    });
}
//api/users?loc=A0&pos=frontend&UserState=1&page=1
//지역 필터/ 직무 필터/ 프로젝트 참여 여부
// 프로젝트 참여 여부는 UserRole에서 찾아야 함. id가 userRole에 있으면 참여중, 없으면 미참여중
router.get('/', function (req, res) {
    var page = typeof req.query.page === 'string' ? req.query.page : '1';
    var LocFilter = req.query.loc;
    var PosFilter = req.query.pos;
    var skip = (parseInt(page) - 1) * 10;
    var limit = 10;
    var UserStateFilter = req.query.UserState === '1' ? 1 : req.query.UserState === '2' ? 2 : 0;
    var filterarg = {};
    if (LocFilter) {
        filterarg['availableLocation'] = LocFilter;
    }
    if (PosFilter) {
        filterarg['position'] = PosFilter;
    }
    User.find(filterarg)
        .skip(skip)
        .limit(limit)
        .exec(function (err, userList) { return __awaiter(void 0, void 0, void 0, function () {
        var data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (err) {
                        return [2 /*return*/, res.json({
                                success: false,
                                err: err,
                            })];
                    }
                    if (!(UserStateFilter === 1)) return [3 /*break*/, 2];
                    if (userList.length === 0) {
                        return [2 /*return*/, res.json({
                                success: true,
                                page: page,
                                user: userList,
                            })];
                    }
                    return [4 /*yield*/, node_filter_async_1.default(userList, function (value, index) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, filterById(value._id)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1:
                    data = _a.sent();
                    res.status(200).json({
                        success: true,
                        page: page,
                        user: data,
                    });
                    _a.label = 2;
                case 2:
                    if (!(UserStateFilter === 2)) return [3 /*break*/, 4];
                    if (userList.length === 0) {
                        return [2 /*return*/, res.json({
                                success: true,
                                page: page,
                                user: userList,
                            })];
                    }
                    return [4 /*yield*/, node_filter_async_1.default(userList, function (value, index) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, filterById(value._id)];
                                    case 1: return [2 /*return*/, !(_a.sent())];
                                }
                            });
                        }); })];
                case 3:
                    data = _a.sent();
                    res.status(200).json({
                        success: true,
                        page: page,
                        user: data,
                    });
                    return [3 /*break*/, 5];
                case 4:
                    res.status(200).json({
                        success: true,
                        page: page,
                        filterarg: filterarg,
                        user: userList,
                    });
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
});
router.get('/new', function (req, res) {
    User.find()
        .sort({ createdAt: -1 })
        .limit(3)
        .exec(function (err, users) {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({
            users: users,
        });
    });
});
router.get('/waitList', function (req, res) {
    User.find()
        .limit(3)
        .exec(function (err, users) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_filter_async_1.default(users, function (value, index) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, filterById(value._id)];
                                case 1: return [2 /*return*/, !(_a.sent())];
                            }
                        });
                    }); })];
                case 1:
                    data = _a.sent();
                    if (err) {
                        return [2 /*return*/, res.status(400).send(err)];
                    }
                    res.status(200).json({
                        users: data,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
router.get('/recommend', function (req, res) {
    User.find()
        .sort({ receivedLike: -1 })
        .limit(6)
        .exec(function (err, user) {
        if (err) {
            return res.json({
                success: false,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            user: user,
        });
    });
});
router.get('/show/:id', function (req, res) {
    var reqNickname = req.params.id;
    User.findOne({ nickname: reqNickname }, function (err, user) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        res.status(200).json({
            success: true,
            user: user,
        });
    });
});
//사용자가 참여중인(팀장 포함) 프로젝트가 있는지 찾기
router.get('/show/projectList/:id', function (req, res) {
    var reqNickname = req.params.id;
    User.findOne({ nickname: reqNickname }, function (err, user) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        if (!user) {
            res.json({
                success: true,
                data: [''],
            });
        }
        else {
            UserRole_1.default.find()
                .where('userId')
                .equals(user._id)
                .where('role')
                .equals(0)
                .populate('projectId')
                .exec(function (err, result) {
                var data = result.map(function (item) { return item.projectId; });
                res.json({
                    user: user._id,
                    data: data,
                });
            });
        }
    });
});
router.post('/nickname', function (req, res) {
    User.findOne({ nickname: req.body.nickname }, function (err, user) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        if (user != null) {
            res.json({
                success: false,
            });
        }
        else {
            res.status(200).json({
                success: true,
                nickname: req.body.nickname,
            });
        }
    });
});
router.post('/signup', function (req, res) {
    var user = new User(req.body);
    user.save(function (err, doc) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            user: doc,
        });
    });
});
router.post('/login', function (req, res) {
    //구글, github 로그인 => profileObj의 email로 회원정보 확인
    User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
            return res.json({
                Success: false,
                error: 'email not found',
            });
        }
        if (err) {
            return res.json({ success: false, err: err });
        }
        user.generateToken(function (err, user) {
            if (err)
                return res.status(400).send(err);
            res.cookie('U_auth', user.token).status(200).json({
                success: true,
                userId: user._id,
            });
        });
    });
});
router.post('/info', function (req, res) {
    User.findOne({ _id: req.body._id }, function (err, user) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            user: user,
        });
    });
});
router.post('/update', function (req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, User(req.body), function (err, user) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        return res.status(200).json({
            success: true,
            user: user,
        });
    });
});
router.post('/updateImg', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.json({ success: false, err: err });
        }
        if (req.file) {
            return res.status(200).json({
                success: true,
                filePath: req.file.path,
            });
        }
        else {
            return res.status(200).json({
                success: true,
                filePath: req.body.avartarImg,
            });
        }
    });
});
router.get('/auth', auth_middleware_1.auth, function (req, res) {
    if (req.user) {
        res.status(200).json({
            success: true,
            _id: req.user._id,
            isAuth: true,
            email: req.user.email,
            name: req.user.nickname,
            avartarImg: req.user.avartarImg ? req.user.avartarImg : 'none',
        });
    }
});
router.get('/logout', auth_middleware_1.auth, function (req, res) {
    if (req.user) {
        User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, { rawResult: true }, function (err, doc) {
            if (err)
                return res.json({
                    success: false,
                    err: err,
                });
            return res.clearCookie('U_auth').status(200).send({
                success: true,
            });
        });
    }
});
module.exports = router;
