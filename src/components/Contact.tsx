"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <section className="mt-15 p-8 md:gap-22 gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact <span className="text-purple-500">Me</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl">
          Have a question, an opportunity, or just want to say hi? I'd love to
          hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row h-full md:gap-12 gap-24 items-center justify-between w-full">
        {/* Left Section */}
        <div className="md:w-1/2 w-full  h-full justify-center text-center md:text-left flex flex-col gap-4 text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            Feel free to reach out through the form or drop me an email
            directly. I'm open to freelance projects, collaborations.
          </p>
          <p className="">
            <span className="font-semibold text-purple-500">Email:</span>{" "}
            <a
              href="mailto:shuklasaksham729@gmail.com"
              className="underline hover:text-purple-400"
            >
              shuklasaksham729@gmail.com
            </a>
          </p>
          <p className="flex md:justify-start justify-center gap-4">
            <a
              href="https://github.com/Saksham-Shukla-05"
              target="_blank"
              className="hover:text-purple-500"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/saksham-shukla-9758602a6"
              target="_blank"
              className="hover:text-purple-500"
            >
              LinkedIn →
            </a>
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 w-full  bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <>
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                    </FormItem>
                  </>
                )}
              />
              <button
                type="submit"
                className="bg-purple-700 w-full text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
