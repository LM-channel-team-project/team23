import express, { NextFunction, Request, Response } from "express";

const app = express();
const router = express.Router();

router.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.json([
    {id: 1, username: "abc"},
    {id: 2, username: "def"}
  ]);
});

module.exports =router;