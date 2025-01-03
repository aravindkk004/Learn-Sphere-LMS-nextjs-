import { connectToDb } from "@/libs/connectToDb";
import StudyMaterial from "@/schema/studyMaterial";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { courseId } = await params;
  await connectToDb();
  const findCourse = await StudyMaterial.findOne({ courseId: courseId });
  if (!findCourse) {
    return NextResponse.json({ status: 404 });
  } else {
    return NextResponse.json(findCourse, { status: 200 });
  }
}
