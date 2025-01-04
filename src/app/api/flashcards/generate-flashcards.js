import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    return NextResponse.json(flashcards, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
