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
      {/* Content Section */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 md:gap-12">
        {/* Optional subtle horizontal divider for mid screen */}
        <div className="w-16 h-1 bg-purple-500 rounded-full" />

        {/* Contact Icons (optional flair) */}
        <div className="flex gap-6 text-purple-600">
          <a
            href="https://github.com/Saksham-Shukla-05"
            target="_blank"
            className="hover:scale-110 transition"
          >
            GitHub →
          </a>
          <a
            href="https://www.linkedin.com/in/saksham-shukla-9758602a6"
            target="_blank"
            className="hover:scale-110 transition"
          >
            LinkedIn →
          </a>
          <a
            href="mailto:shuklasaksham729@gmail.com"
            className="hover:scale-110 transition"
          >
            Email →
          </a>
        </div>

        {/* Form Box */}
        <div className="w-full bg-gray-200 dark:bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg border dark:border-gray-800 transition-all duration-300">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="px-4 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-300"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="px-4 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-300"
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="px-4 py-2 text-sm sm:text-base border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-300"
                      />
                    </FormControl>
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
    </section>
  );
}
