import { connectToDb } from "@/libs/connectToDb";
import Notes from "@/schema/notesSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { courseId } = await params;
    await connectToDb();
    const chapter = await Notes.findOne({ courseId: courseId });
    return NextResponse.json(chapter, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
