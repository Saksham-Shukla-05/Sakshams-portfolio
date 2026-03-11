import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saksham Shukla | Full Stack Developer",
  description:
    "Explore the portfolio of Saksham Shukla — a passionate Full Stack Web Developer skilled in building modern, responsive, and dynamic web applications.",
  icons: {
    icon: "/favicons.png",
  },
  openGraph: {
    title: "Saksham Shukla | Full Stack Developer",
    description:
      "Explore the portfolio of Saksham Shukla — a passionate Full Stack Web Developer skilled in building modern, responsive, and dynamic web applications.",
    url: "https://www.sakshamshukla.in/",
    siteName: "Saksham Shukla Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dlycinwrl/image/upload/v1773247740/developer_portfolio_dnyag8.png",
        width: 1200,
        height: 630,
        alt: "Saksham Shukla Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <div className="md:hidden">
              <AppSidebar />
            </div>
            <Toaster />
            <main className="dark:bg-black bg-white flex flex-col w-full md:gap-0 items-center">
              <Navbar />

              {children}
              <Analytics />
              <Footer />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
