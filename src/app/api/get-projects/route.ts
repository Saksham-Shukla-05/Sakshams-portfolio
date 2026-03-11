import dbConnect from "@/lib/dbConnect";
import { Project } from "@/model/project.Model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json({ projects });
  } catch (error) {
    console.error("FULL ERROR:", error);
    return NextResponse.json(
      {
        message: "Error while fetching projects",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
