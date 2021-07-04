"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var User = require('../models/User').User;
var Comment = require('../models/Comment').Comment;
var router = express_1.default.Router();
router.get('/', function (req, res) { });
router.post('/', function (req, res) {
    var cmt = new Comment(req.body);
    cmt.save(function (err, comment) {
        if (err)
            return res.json({ success: false, err: err });
        return res.status(200).json({ success: true, comment: comment });
    });
});
router.post('/remove', function (req, res) {
    Comment.deleteOne(req.body, function (err, cmt) {
        if (err)
            return res.json({ success: false, err: err });
        return res.status(200).json({ success: true });
    });
});
router.get('/:pid', function (req, res) {
    Comment.find({ projectId: req.params.pid })
        .sort({ createdAt: -1 })
        .exec(function (err, comments) {
        if (err)
            return res.json({ success: false, err: err });
        Promise.all(comments.map(function (cmt) { return User.findOne({ _id: cmt.writer }); }))
            .then(function (results) {
            var mappedResults = results.map(function (user, idx) { return ({
                nickname: user.nickname,
                avartarImg: user.avartarImg,
                createdAt: comments[idx].createdAt,
                content: comments[idx].content,
            }); });
            return res.status(200).json({ success: true, result: mappedResults });
        })
            .catch(function (err) {
            return res.json({ success: false, err: err });
        });
    });
});
module.exports = router;
