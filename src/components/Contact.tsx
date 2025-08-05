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
import { contactSchema } from "@/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import z from "zod";
import { FormMessage } from "@/components/ui/form";

export default function Contact() {
  type ContactFormData = {
    name: string;
    email: string;
    message: string;
  };
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = (obj: ContactFormData) => {
    console.log("Form Data:", obj);
  };

  return (
    <section className="mt-20    p-8   gap-12 w-full justify-around flex flex-col items-center dark:bg-black bg-white text-black dark:text-white">
      {/* Heading */}

      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl mb-3 md:text-4xl font-bold">
          Drop a <span className="text-purple-500">Message</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg">
          Have a question, an opportunity, or just want to say hi? I’d love to
          hear from you.
        </p>
      </div>
      <div className="w-16 h-1 bg-purple-500 rounded-full" />

      {/* Content Section */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 md:gap-12">
        {/* Optional subtle horizontal divider for mid screen */}

        {/* Contact Icons (optional flair) */}
        <div className="md:hidden md:w-1/2 w-full h-full justify-center py-2 text-center md:text-justify flex flex-col md:gap-8 gap-3 text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            Feel free to reach out through the form or drop me an email
            directly. I’m open to freelance projects, collaborations.
          </p>

          <p className="flex md:justify-start justify-center gap-4">
            <a
              href="mailto:shuklasaksham729@gmail.com"
              className=" hover:text-purple-400"
            >
              Email →
            </a>
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

        {/* Form Box */}
        <div className="w-full bg-gray-200 dark:bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg border dark:border-gray-800 transition-all duration-300">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => onSubmit(data))}
              className="space-y-6"
            >
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
                    <FormMessage />
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
                    <FormMessage />
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
    </section>
  );
}
