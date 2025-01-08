import Quizs from "@/schema/quizSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { courseId } = await params;
    const quiz = await Quizs.findOne({ courseId });
    if (quiz) {
      return NextResponse.json(quiz, { status: 200 });
    } else {
      return NextResponse.json({ status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
