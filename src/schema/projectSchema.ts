import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  techStack: z.string().min(1, "Tech stack is required"),
  liveLink: z.string().url(),
  gitHub: z.string().url(),
});
