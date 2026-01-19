import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as requested/planned
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohebi & Associates",
  description: "Cognitive neuroscience lab at UW-Madison investigating how neuromodulatory signals influence learning and decision-making.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-blue-500/30 selection:text-blue-200`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
