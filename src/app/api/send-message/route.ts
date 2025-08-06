import { transporter } from "@/lib/mailer";
import { contactSchema } from "@/schema/contactSchema";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

// const schema = z.object({
//   name: z.string().min(2, "Name is too short"),
//   email: z.string().email("Invalid email"),
//   message: z.string().min(5, "Message must be at least 5 characters"),
// });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

    await transporter.sendMail({
      from: process.env.USER_MAIL,
      to: email,
      subject: `New message from ${name}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
    <h2 style="color: #4CAF50;">Thanks for reaching out!</h2>
    <p>Hey there,</p>
    <p>Thank you for contacting me! I’ve received your message and will get back to you as soon as possible.</p>
    <p>In the meantime, feel free to check out my portfolio or connect with me on <a href="https://www.linkedin.com/in/saksham-shukla-9758602a6"> LinkedIn </a>  </p>
    <p>Have a great day!</p>
    <br/>
    <p>Best regards,</p>
    <p><strong>Saksham Shukla</strong></p>
  </div>
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
