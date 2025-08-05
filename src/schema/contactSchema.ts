import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().min(2, "Name is required "),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, "Message must be 5 letters long "),
});
