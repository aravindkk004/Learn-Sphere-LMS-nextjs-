import { courseOutline } from "@/config/AiModal";
import { connectToDb } from "@/libs/connectToDb";
import StudyMaterial from "@/schema/studyMaterial";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId } = getAuth(req);
    await connectToDb();
    const { courseId, topic, courseType, difficultyLevel } = await req.json();

    console.log(topic, courseType, difficultyLevel);
    if ((!topic, !courseType, !difficultyLevel)) {
      return NextResponse.json({ status: 404 });
    }
    const prompt =
      "Generate a study material for " +
      topic +
      " for " +
      courseType +
      " and level of difficulty will be " +
      difficultyLevel +
      " with summary of course, List of chapters along with summary for each chapter and one emoji for that chapter, Topic list in each chapter, All results in JSON format.";

    // generate course layout using ai
    const aiResp = await courseOutline.sendMessage(prompt);
    const aiResult = JSON.parse(aiResp.response.text());

    // save the result along with user Input
    const dbResult = await StudyMaterial.create({
      courseId: courseId,
      courseType: courseType,
      createdBy: userId,
      topic: topic,
      courseLayout: aiResult,
    });
    console.log(dbResult);
    return NextResponse.json(
      { success: true, data: dbResult },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
