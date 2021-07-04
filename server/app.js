"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var env_1 = require("./config/env");
require("./db");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.json());
var cors = require('cors');
app.use(cors());
app.use(cookie_parser_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static("client/build"));
    app.get("*", function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, "../client", "build", "index.html"));
    });
}
app.get('/', function (req, res) {
    res.send('hello typescript!');
});
var UserRouter = require('./routes/User');
var ProjectRouter = require('./routes/Project');
var ManageProjectRouter = require('./routes/ManageProject');
var LikeRouter = require('./routes/Like');
var CommentRouter = require('./routes/Comment');
var AlarmRouter = require('./routes/Alarm');
app.use('/api/users', UserRouter);
app.use('/api/projects', ProjectRouter);
app.use('/api/manage', ManageProjectRouter);
app.use('/api/like', LikeRouter);
app.use('/api/comment', CommentRouter);
app.use('/api/alarm', AlarmRouter);
app.use('/uploads', express_1.default.static('uploads'));
app.listen(env_1.SERVER_PORT, function () {
    console.log("Server listnening on " + env_1.SERVER_PORT);
});
