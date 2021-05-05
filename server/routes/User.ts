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

router.post("/nickname", (req: Request, res: Response) => {
  //req.body.nickname이 현재 DB에 user.nickname에 있는지 확인
  res.status(200).json({
    success: true,
    nickname: req.body.nickname
  });
});

router.post("/signup", (req: Request, res: Response) => {
  //console.log(req.body);
  //create user model 로 받아온 정보를 DB에 저장후 Success 리턴
  res.status(200).json({
    success: true,
  });
});

router.post("/info", (req: Request, res: Response) => {
  //console.log(req.body);
  //req.body.userId 로 DB에서 해당 정보 찾기
  res.status(200).json({
    success: true,
    email: 'abc@naver.com',
    nickname: '개발이',
    pos: 'backend',
    level: 'level2',
  });
});
module.exports =router;