import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  question: {
    required: true,
    type: String,
  },
  answer: {
    required: true,
    type: String,
  },
});

const Question = mongoose.model("question", dataSchema);
export = Question;
