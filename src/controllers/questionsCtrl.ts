import { Request, Response } from "express";
import { QuestionsService } from "../services/questionsService";

const QuestionsCtrl = {
  list: (req: Request, res: Response) => {
    QuestionsService.getQuestions(req, res)
      .then((questions) => {
        res.status(200).send(questions);
      })
      .catch((e) => {
        console.error("failed to fetch questions", e);
        res.status(500).send();
      });
  },

  one: (req: Request, res: Response) => {
    QuestionsService.getQuestion(req, res)
      .then((question) => {
        res.status(200).send(question);
      })
      .catch((e) => {
        console.error("failed to fetch question", e);
        res.status(500).send();
      });
  },

  update: (req: Request, res: Response) => {
    QuestionsService.update(req, res)
      .then((question) => {
        res.status(200).send(question);
      })
      .catch((e) => {
        console.error("failed to update questions", e);
        res.status(500).send();
      });
  },

  delete: (req: Request, res: Response) => {
    QuestionsService.delete(req, res)
      .then((id) => {
        res.status(200).send(id);
      })
      .catch((e) => {
        console.error("failed to delete questions", e);
        res.status(500).send();
      });
  },

  create: (req: Request, res: Response) => {
    QuestionsService.postQuestion(req, res)
      .then((questions) => {
        res.status(200).send(questions);
      })
      .catch((e) => {
        console.error("failed to create questions", e);
        res.status(500).send();
      });
  },
};

export default QuestionsCtrl;
