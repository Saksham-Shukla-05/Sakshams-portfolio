import dbConnect from "@/lib/dbConnect";
import { Project } from "@/model/project.Model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const projects = await Project.find({});
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while fetching projects", error },
      { status: 500 }
    );
  }
}
