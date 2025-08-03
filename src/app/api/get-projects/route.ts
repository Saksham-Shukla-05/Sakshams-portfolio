import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Your logic here
  return NextResponse.json({ message: "Project added!", request });
}
