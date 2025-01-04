import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    id: { type: String },
    courseId: { type: String },
    notes: [{ type: Object }],
  },
  { timestamps: true }
);

const Notes = mongoose.models.Notes || mongoose.model("Notes", NoteSchema);

export default Notes;
