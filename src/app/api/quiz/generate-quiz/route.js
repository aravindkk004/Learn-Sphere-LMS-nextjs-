
import { generateQuiz } from "@/config/AiModal";
import Quizs from "@/schema/quizSchema";
import StudyMaterial from "@/schema/studyMaterial";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseId, courseTitle, courseSummary, courseChapters } =
      await req.json();
    if ((!courseId, !courseTitle, !courseSummary)) {
      return NextResponse.json({ status: 404 });
    }
    const prompt =
      "Generate quiz on topic : " +
      courseTitle +
      " and course Summary:" +
      courseSummary +
      " and course chapters:" +
      courseChapters +
      " with the help of course title, course summary, course chapter, generate Questions and options along with correct answer in JSON format (max 10)";
    const aiResp = await generateQuiz.sendMessage(prompt);
    const aiResult = JSON.parse(aiResp.response.text());

    const saveToDb = await Quizs.findOne({ courseId });
    if (!saveToDb) {
      const Quiz = new Quizs({
        courseId,
        Quizs: aiResult,
      });
      await Quiz.save();
    } else {
      saveToDb.Quiz.push(aiResult);
      await saveToDb.save();
    }
    const changeStatus = await StudyMaterial.findOne({ courseId });
    changeStatus.quiz = true;
    await changeStatus.save();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 });
  }
}
