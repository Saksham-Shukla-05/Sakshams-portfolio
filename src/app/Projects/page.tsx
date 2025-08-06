"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { z } from "zod";

// ✅ Zod schema & type
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  techStack: z.array(z.string().min(1)),
  liveLink: z.string().url(),
  gitHub: z.string().url(),
});
type Project = z.infer<typeof projectSchema>;

function ProjectComponent() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.get("/api/get-projects");
      const validProjects = Array.isArray(res.data.projects)
        ? (res.data.projects
            .map((proj: unknown) => {
              const result = projectSchema.safeParse(proj);
              return result.success ? result.data : null;
            })
            .filter(Boolean) as Project[])
        : [];

      setProjects(validProjects);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
      setError("Something went wrong while fetching projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="md:p-8 p-4 flex flex-col items-center gap-8 justify-center md:mt-4 mt-8 dark:bg-black bg-white w-full">
      {loading && <p>Loading projects...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={project.slug}>
                <Card className="flex flex-col h-full min-h-[320px] p-6 border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col flex-1 justify-between gap-6">
                    <div className="flex-1 flex flex-col justify-between gap-4">
                      <CardTitle className="text-xl text-center text-purple-600 uppercase dark:text-purple-400 mb-3">
                        {project.title}
                      </CardTitle>

                      <CardDescription className="text-sm text-zinc-600 dark:text-zinc-300 text-justify flex-1">
                        {project.description}
                      </CardDescription>

                      <div>
                        <strong className="text-zinc-700 dark:text-zinc-200 block mb-2">
                          Tech Stack:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-purple-100 uppercase dark:bg-purple-900 text-purple-700 dark:text-purple-200 text-xs px-2 py-1 rounded-full"
                            >
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between   text-sm font-medium pt-4 mt-auto">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className=" hover:underline rounded-2xl border border-black p-2 dark:text-black dark:bg-white"
                      >
                        Live Project
                      </Link>
                      <Link
                        href={project.gitHub}
                        target="_blank"
                        className="hover:underline rounded-2xl border border-black p-2 dark:text-black dark:bg-white"
                      >
                        GitHub Repo
                      </Link>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <p className="text-gray-600 dark:text-gray-300">No projects found.</p>
      )}
    </div>
  );
}

export default ProjectComponent;
