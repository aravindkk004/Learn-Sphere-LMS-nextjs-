import mongoose from "mongoose";

const StudyMaterialSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true },
    courseType: { type: String, required: true },
    createdBy: { type: String, required: true },
    topic: { type: String, required: true },
    courseLayout: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
);

const StudyMaterial =
  mongoose.models.StudyMaterial ||
  mongoose.model("StudyMaterial", StudyMaterialSchema);

export default StudyMaterial;
