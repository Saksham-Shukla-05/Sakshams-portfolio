import { NextResponse } from "next/server";
// import { Project } from "@/model/project.Model";

import dbConnect from "@/lib/dbConnect";
// import z from "zod";

// const projectSchema = z.object({
//   title: z.string().min(1),
//   description: z.string().min(1),
//   slug: z.string().min(1),
//   techStack: z.array(z.string().min(1)),
//   liveLink: z.string().url(),
//   gitHub: z.string().url(),
// });

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();

    // const { title, description, slug, techStack, liveLink, gitHub } =
    //   projectSchema.parse(body);

    console.log(body);

    // const newProject = await Project.create({
    //   title,
    //   description,
    //   slug,
    //   techStack,
    //   liveLink,
    //   gitHub,
    // });

    return NextResponse.json(
      { message: "Project added successfully!" },
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
