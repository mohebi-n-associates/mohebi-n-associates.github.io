import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohebi Lab | Cognitive Neuroscience at UW-Madison",
    template: "%s | Mohebi Lab",
  },
  description: "Cognitive neuroscience lab at UW-Madison investigating how neuromodulatory signals influence learning and decision-making through electrophysiology, calcium imaging, and computational modeling.",
  keywords: ["neuroscience", "dopamine", "decision making", "reinforcement learning", "neuromodulation", "UW-Madison", "Mohebi Lab"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
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
