import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stack = [
  // Frontend stack
  {
    title: "JavaScript",
    des: "ES6+ JavaScript for interactive web development",
  },
  {
    title: "TypeScript",
    des: "Typed superset of JavaScript for scalable applications",
  },
  { title: "React", des: "Library for building modern and dynamic UIs" },
  {
    title: "Next.js",
    des: "React framework for server-side rendering and routing",
  },
  {
    title: "Tailwind CSS",
    des: "Utility-first CSS framework for fast UI styling",
  },

  // Backend stack
  {
    title: "Node.js",
    des: "JavaScript runtime for building scalable backend services",
  },
  { title: "Express.js", des: "Minimal backend framework for Node.js" },
  {
    title: "MongoDB",
    des: "NoSQL database for flexible and scalable data storage",
  },

  // Language knowledge
  {
    title: "Java",
    des: "Robust object-oriented language with backend capabilities",
  },

  // Tools & Platforms
  { title: "Git", des: "Version control system for tracking code changes" },
  {
    title: "GitHub",
    des: "Hosting platform for repositories and collaboration",
  },
  { title: "Postman", des: "API testing and development tool" },
  { title: "Vercel", des: "Deployment platform for frontend applications" },
];

const About = () => {
  return (
    <section className="w-full min-h-screen px-6 sm:px-8 py-14 md:py-20 flex flex-col items-center gap-10 md:gap-16">
      {/* Intro Heading */}
      <div className="flex flex-col gap-2 items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Meet the <span className="text-purple-500">Developer</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
          A brief introduction to my background, experience, and the tech stack
          I work with.
        </p>
        <div className="w-12 mt-4 md:w-16 h-1 bg-purple-500 rounded-full" />
      </div>

      {/* Bio */}
      <div className="flex w-full md:text-center text-justify flex-col gap-4 text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed max-w-5xl">
        <p>
          Hi, I'm{" "}
          <span className="font-semibold text-purple-500">Saksham Shukla</span>,
          a passionate and self-driven web developer currently in my final year
          of the Integrated Master of Computer Applications (I-MCA) program at
          the Indian Institute of Professional Studies (IIPS), DAVV, Indore.
        </p>
        <p>
          I specialize in full-stack web development, focusing on modern
          technologies like React, Node.js, and Tailwind CSS. My academic
          background, paired with practical project & experience, reflects my
          commitment to crafting clean, scalable, and user-centric web
          applications.
        </p>
      </div>

      {/* Stack Section */}
      <div className="w-full pt-10 border-t flex flex-col items-center gap-6">
        <div className="flex flex-col items-center text-center gap-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Development <span className="text-purple-500">Stack</span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Explore the tools and technologies I use to design, build, and
            deploy full-stack web applications.
          </p>
          <div className="w-12 mt-3 md:w-16 h-1 bg-purple-500 rounded-full" />
        </div>

        <div className="w-full mt-6 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-6xl">
          {stack.map((card) => (
            <Card
              key={card.title}
              className="w-full h-40 flex flex-col justify-center items-center text-center p-5 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
            >
              <CardTitle className="text-purple-600 dark:text-purple-400">
                {card.title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm">
                {card.des}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
