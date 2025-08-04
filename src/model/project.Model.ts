import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  slug: string;
  techStack: string[];
  liveLink: string;
  gitHub: string;
  coverImage?: string;
}

const ProjectSchema: Schema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  slug: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  liveLink: {
    type: String,
    required: [true, "Live Link is required"],
  },
  gitHub: {
    type: String,
    required: [true, "GitHub is required"],
  },
  coverImage: {
    type: String,
    required: false,
  },
});

export const Project =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
