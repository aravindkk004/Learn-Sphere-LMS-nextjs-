import { generateFlashcard } from "@/config/AiModal";
import Flashcards from "@/schema/flashCardSchema";
import StudyMaterial from "@/schema/studyMaterial";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = getAuth(req);
    const { courseId, courseTitle, courseSummary, courseChapters } =
      await req.json();
    if ((!courseId, !courseTitle, !courseSummary)) {
      return NextResponse.json({ status: 404 });
    }
    const prompt =
      "with the help of these course title: " +
      courseTitle +
      ", coursesummary: " +
      courseSummary +
      " ,Generate the flashcard on topic: " +
      courseChapters +
      ". with the difficulty level moderate in JSON format with front back content, Maximum 15";
    const aiResp = await generateFlashcard.sendMessage(prompt);
    const aiResult = JSON.parse(aiResp.response.text());

    const saveToDb = await Flashcards.findOne({ courseId });
    if (!saveToDb) {
      const flashcards = new Flashcards({
        courseId,
        Flashcards: aiResult,
      });
      await flashcards.save();
    } else {
      saveToDb.Flashcards.push(aiResult);
      await saveToDb.save();
    }
    const changeStatus = await StudyMaterial.findOne({ courseId });
    changeStatus.flashcard = true;
    await changeStatus.save();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 });
  }
}
