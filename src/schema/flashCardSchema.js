import mongoose from "mongoose";

const FlashcardSchema = new mongoose.Schema(
  {
    id: { type: String },
    courseId: { type: String },
    Flashcards: [{ type: Object }],
  },
  { timestamps: true }
);

const Flashcards = mongoose.models.Flashcards || mongoose.model("Flashcards", FlashcardSchema);

export default Flashcards;
