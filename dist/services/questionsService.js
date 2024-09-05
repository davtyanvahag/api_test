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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const question_1 = __importDefault(require("../models/question"));
const mongoose_1 = __importDefault(require("mongoose"));
// TODO: use any storage to save the questions
class QuestionsService {
    static getQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_1.default.find();
                return Promise.resolve(data);
            }
            catch (error) {
                return { message: error.message };
            }
        });
    }
    static getQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield question_1.default.findOne({
                    _id: new mongoose_1.default.Types.ObjectId(req.params.id),
                });
                return Promise.resolve(data);
            }
            catch (error) {
                return { message: error.message };
            }
        });
    }
    static postQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new question_1.default({
                question: req.body.question,
                answer: req.body.answer,
            });
            data.save();
            return Promise.resolve(data);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = { _id: new mongoose_1.default.Types.ObjectId(req.params.id) };
            const doc = yield question_1.default.findOne(filter);
            doc.question = req.body.question;
            doc.answer = req.body.answer;
            yield doc.save();
            return Promise.resolve(doc);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = { _id: new mongoose_1.default.Types.ObjectId(req.params.id) };
            yield question_1.default.deleteOne(filter);
            return Promise.resolve({ id: req.params.id });
        });
    }
}
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questionsService.js.map