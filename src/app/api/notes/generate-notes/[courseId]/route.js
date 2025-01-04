import { generateNotesAiModel } from "@/config/AiModal";
import { connectToDb } from "@/libs/connectToDb";
import Notes from "@/schema/notesSchema";
import StudyMaterial from "@/schema/studyMaterial";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { courseId } = await params;
    const { courseDetails } = await req.json();

    await connectToDb();
    const prompt =
      "Generate exam material detail content for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not add HTMLKL, Head, body, title tag) add more css to make it more attractive,  and colorful, use latin, inter, poppins font family, make it responsive style also. The chapters: " +
      JSON.stringify(courseDetails) +
      ".";
    const aiResp = await generateNotesAiModel.sendMessage(prompt);
    const aiResult = JSON.parse(aiResp.response.text());

    console.log("AI Result:", aiResult);
    const notesDoc = await Notes.findOne({ courseId });
    if (!notesDoc) {
      const newNotesDoc = new Notes({
        courseId,
        notes: [aiResult],
      });
      await newNotesDoc.save();
    } else {
      notesDoc.notes.push(aiResult);
      await notesDoc.save();
    }
    const updateToCourse = await StudyMaterial.findOne({ courseId });
    if (updateToCourse) {
      updateToCourse.notes = true;
      await updateToCourse.save();
    }
    return NextResponse.json(aiResult, { status: 200 });
  } catch (error) {
    console.error("Error occurred while generating notes:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
