import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

interface APIProps {
  id: number;
  username: string;
  skill: string[];
  state: boolean;
}

router.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.json([
    { id: 1,
      username: "abc",
      skill: ["react", "nodeJS", "Javascript"],
      state: true
    },
    { id: 2,
      username: "def",
      skill: ["nextJS", "VueJS", "Javascript"],
      state: true
    },
    { id: 3,
      username: "xyz",
      skill: ["nextJS", "nodeJS", "JAVA"],
      state: false
    },
    { id: 4,
      username: "한글",
      skill: ["reactNative", "Swift", "Python", "C++"],
      state: true
    },
  ]);
});

module.exports =router;