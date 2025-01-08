import { connectToDb } from "@/libs/connectToDb";
import Flashcards from "@/schema/flashCardSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { courseId } = await params;
    await connectToDb();
    const flashcards = await Flashcards.findOne({ courseId });
    if (flashcards) {
      return NextResponse.json(flashcards, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Flashcard not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500 });
  }
}
