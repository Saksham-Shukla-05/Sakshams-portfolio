import { transporter } from "@/lib/mailer";
import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = schema.parse(body);

    await transporter.sendMail({
      from: process.env.USER_MAIL,
      to: email,
      subject: `New message from ${name}`,
      text: message,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong while processing the request." },
      { status: 500 }
    );
  }
}
