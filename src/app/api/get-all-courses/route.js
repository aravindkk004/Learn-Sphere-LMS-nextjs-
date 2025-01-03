import { connectToDb } from "@/libs/connectToDb";
import StudyMaterial from "@/schema/studyMaterial";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDb();
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
    const findCourse = await StudyMaterial.find({ createdBy: userId });
    if (!findCourse) {
      return NextResponse.json({ status: 404 });
    } else {
      return NextResponse.json(findCourse , { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
