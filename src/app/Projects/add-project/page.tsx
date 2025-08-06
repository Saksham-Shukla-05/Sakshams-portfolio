"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/schema/projectSchema";
import { z } from "zod";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AddProjects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pass = searchParams.get("key");
    if (pass !== process.env.MY_SECRET) {
      router.push("/");
    }
  }, [searchParams, router]);

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      slug: "",
      techStack: "",
      liveLink: "",
      gitHub: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    const payload = {
      ...data,
      techStack: data.techStack.split(",").map((tech) => tech.trim()),
    };

    try {
      const res = await axios.post("/api/add-projects", payload);
      if (!res.data.message) throw new Error("Failed to add project");
      alert("Project added successfully!");
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
      <div className="max-w-5xl bg-gray-200 dark:bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg border dark:border-gray-800 transition-all duration-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="My Awesome Project" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Project description..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="my-awesome-project" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tech Stack */}
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tech Stack</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="e.g. React, Node.js, MongoDB"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Live Link */}
            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="https://yourproject.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* GitHub Link */}
            <FormField
              control={form.control}
              name="gitHub"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Link</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://github.com/yourproject"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-fit bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-6 py-2 rounded-full transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddProjects;
