import { Request, Response } from "express";
import Question from "../models/question";
import Schema from "mongoose";

// TODO: use any storage to save the questions

export class QuestionsService {
  static async getQuestions(req: Request, res: Response) {
    try {
      const data = await Question.find();
      return Promise.resolve(data);
    } catch (error) {
      return { message: error.message };
    }
  }

  static async getQuestion(req: Request, res: Response) {
    try {
      const data = await Question.findOne({
        _id: new Schema.Types.ObjectId(req.params.id),
      });
      return Promise.resolve(data);
    } catch (error) {
      return { message: error.message };
    }
  }

  static async postQuestion(
    req: { body: { question: any; answer: any } },
    res: Response
  ) {
    const data = new Question({
      question: req.body.question,
      answer: req.body.answer,
    });
    data.save();
    return Promise.resolve(data);
  }

  static async update(req: Request, res: Response) {
    const filter = { _id: new Schema.Types.ObjectId(req.params.id) };

    const doc = await Question.findOne(filter);

    doc.question = req.body.question;
    doc.answer = req.body.answer;
    await doc.save();
    return Promise.resolve(doc);
  }

  static async delete(req: Request, res: Response) {
    const filter = { _id: new Schema.Types.ObjectId(req.params.id) };
    await Question.deleteOne(filter);

    return Promise.resolve({ id: req.params.id });
  }
}
