"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const dataSchema = new mongoose_1.default.Schema({
    question: {
        required: true,
        type: String,
    },
    answer: {
        required: true,
        type: String,
    },
});
const Question = mongoose_1.default.model("question", dataSchema);
module.exports = Question;
//# sourceMappingURL=question.js.map