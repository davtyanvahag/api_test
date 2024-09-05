"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionsService_1 = require("../services/questionsService");
const QuestionsCtrl = {
    list: (req, res) => {
        questionsService_1.QuestionsService.getQuestions(req, res)
            .then((questions) => {
            res.status(200).send(questions);
        })
            .catch((e) => {
            console.error("failed to fetch questions", e);
            res.status(500).send();
        });
    },
    one: (req, res) => {
        questionsService_1.QuestionsService.getQuestion(req, res)
            .then((question) => {
            res.status(200).send(question);
        })
            .catch((e) => {
            console.error("failed to fetch question", e);
            res.status(500).send();
        });
    },
    update: (req, res) => {
        questionsService_1.QuestionsService.update(req, res)
            .then((question) => {
            res.status(200).send(question);
        })
            .catch((e) => {
            console.error("failed to update questions", e);
            res.status(500).send();
        });
    },
    delete: (req, res) => {
        questionsService_1.QuestionsService.delete(req, res)
            .then((id) => {
            res.status(200).send(id);
        })
            .catch((e) => {
            console.error("failed to delete questions", e);
            res.status(500).send();
        });
    },
    create: (req, res) => {
        questionsService_1.QuestionsService.postQuestion(req, res)
            .then((questions) => {
            res.status(200).send(questions);
        })
            .catch((e) => {
            console.error("failed to create questions", e);
            res.status(500).send();
        });
    },
};
exports.default = QuestionsCtrl;
//# sourceMappingURL=questionsCtrl.js.map