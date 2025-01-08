import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    id: { type: String },
    courseId: { type: String },
    Quizs: [{ type: Object }],
  },
  { timestamps: true }
);

const Quizs = mongoose.models.Quizs || mongoose.model("Quizs", QuizSchema);

export default Quizs;
