import { NextResponse } from "next/server";
import { Project } from "@/model/project.Model";

import dbConnect from "@/lib/dbConnect";
import z from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  techStack: z.array(z.string().min(1)),
  liveLink: z.string().url(),
  gitHub: z.string().url(),
});

export async function POST(request: Request) {
  try {
    await dbConnect(); // ensure MongoDB is connected

    const body = await request.json();

    // Validate request data with Zod schema
    const { title, description, slug, techStack, liveLink, gitHub } =
      projectSchema.parse(body);

    console.log(body);

    // Save to database
    const newProject = await Project.create({
      title,
      description,
      slug,
      techStack,
      liveLink,
      gitHub,
    });

    return NextResponse.json(
      { message: "Project added successfully!", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding project:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
