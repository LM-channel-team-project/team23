import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

interface APIProps {
  id: number;
  title: string;
  description: string;
  skill: string[];
  state: Array<number>;
  category: string;
}

router.get("/", (req: Request, res: Response, next:NextFunction) => {
  res.json([
    { id: 1,
      title: "study_with",
      description: "개발 프로젝트 팀원을 매칭해주는 프로그램",
      skill: ["react", "nodeJS", "mongoDB","typescript"],
      state: [2,4],
      category: "포트폴리오"
    },
    { id: 2,
      title: "To Do list",
      description: "간단한 crud 메모장 만들기, 바닐라JS를 연습하려고 합니다.",
      skill: ["html","css","jypescript"],
      state: [3,3],
      category: "스터디"
    },
    { id: 3,
      title: "youtube_clone",
      description: "react로 유튜브 클론코딩을 하려고 합니다. 프론트에 중점을 두고 있어요.",
      skill: ["react", "typescript"],
      state: [1,4],
      category: "포트폴리오"
    },
    { id: 4,
      title: "study cafe 찾기",
      description: "지도 기반 스터디 카페 찾아주는 웹 만들어 보려고 합니다.",
      skill: ["react", "nodeJS", "mongoDB","typescript"],
      state: [2,5],
      category: "포트폴리오"
    },
    { id: 5,
      title: "diary",
      description: "일기를 쓰고 선택한 친구끼리 공유할 수 있는 교환 일기장을 만들려고 합니다.",
      skill: ["VueJS", "nodeJS", "SPRING","typescript"],
      state: [1,4],
      category: "창업"
    }
  ]);
});

module.exports =router;