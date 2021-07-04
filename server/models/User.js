"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var jwt = require('jsonwebtoken');
var userSchema = new mongoose_1.default.Schema({
    avartarImg: String,
    nickname: {
        type: String,
        required: 'Nickname is required.',
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: 'Email is required.',
        trim: true,
        unique: true,
    },
    tel: {
        type: String,
        trim: true,
    },
    position: String,
    positionLevel: String,
    availableLocation: {
        type: String,
        default: 'A0',
    },
    availableWeek: String,
    availableTime: String,
    interestSkills: [String],
    token: String,
    receivedLike: {
        type: Number,
        default: 0,
    },
    portfolio: [String],
    intro: String,
}, {
    timestamps: true,
});
userSchema.methods.generateToken = function (cb) {
    this.token = jwt.sign(this._id.toHexString(), 'secret');
    this.save(function (err, user) {
        cb(err, user);
    });
};
userSchema.statics.findByToken = function (token, cb) {
    var _this = this;
    jwt.verify(token, 'secret', function (err, decode) {
        _this.findOne({ _id: decode, token: token }, function (err, user) {
            cb(err, user);
        });
    });
};
exports.User = mongoose_1.default.model('user', userSchema);
exports.default = exports.User;
