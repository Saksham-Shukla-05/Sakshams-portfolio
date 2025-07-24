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
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = () => {
    console.log("Form Data:");
  };

  return (
    <section className="mt-20  p-8 md:gap-22 gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}
      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Drop a <span className="text-purple-500">Message</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
          Have a question, an opportunity, or just want to say hi? I’d love to
          hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row h-full md:gap-12 gap-10 items-center md:justify-center justify-between w-full">
        {/* Left Section */}
        <div className="md:hidden md:w-1/2 w-full h-full justify-center py-2 text-center md:text-justify flex flex-col md:gap-8 gap-3 text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            Feel free to reach out through the form or drop me an email
            directly. I’m open to freelance projects, collaborations.
          </p>
          <p>
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
        <div className="w-full md:max-w-5xl bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow-md">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 flex flex-col"
            >
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="px-3 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="px-3 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm sm:text-base">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="px-3 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring focus:ring-purple-300"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <button
                type="submit"
                className=" bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-4 py-2 rounded  transition-all duration-300"
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
