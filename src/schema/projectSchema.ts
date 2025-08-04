import { z } from "zod";

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  techStack: z.array(z.string()),
  liveLink: z.string().url(),
  gitHub: z.string().url(),
  coverImage: z.string().url(),
});
